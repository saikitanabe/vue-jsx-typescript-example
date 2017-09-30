package main

import (
	"bytes"
	"flag"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"path/filepath"
	"regexp"
)

const (
	tmplFile          = "index-tmpl.html"
	tmplAnalyticsHTML = "analytics.html"
)

var (
	devFlag  = flag.Bool("dev", false, "Generate development index.html")
	prodFlag = flag.Bool("prod", false, "Generate production index.html")
	prefix   = flag.String("prefix", "dist", "Prefix where JavaScript file are loaded. Could be e.g. through CDN")

	templates = []string{
		filepath.Join("tmpl", tmplFile),
		filepath.Join("tmpl", tmplAnalyticsHTML),
	}
)

func main() {
	flag.Parse()

	if flag.NArg() != 1 {
		flag.Usage()
		return
	}

	t, err := template.
		New(tmplFile).
		ParseFiles(templates...)
	if err != nil {
		log.Fatalln(err)
		return
	}

	distPath := flag.Arg(0)
	data, err := resolveData(distPath)
	if err != nil {
		log.Fatalln(err)
	}

	indexHTML, err := toTemplate(t, data)
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println(indexHTML)
}

type IndexHTMLData struct {
	ManifestJS  string
	VueVendorJS string
	AppJS       string
	Analytics   bool
}

func resolveData(path string) (*IndexHTMLData, error) {
	switch {
	case *devFlag:
		return &IndexHTMLData{
			ManifestJS:  fmt.Sprintf("%s/manifest.js", *prefix),
			VueVendorJS: fmt.Sprintf("%s/vuevendor.js", *prefix),
			AppJS:       fmt.Sprintf("%s/app.js", *prefix),
			Analytics:   false,
		}, nil
	case *prodFlag:
		return resolveProdData(path)
	default:
		return nil, fmt.Errorf("Define --dev or --prod flag")
	}
}

func resolveProdData(path string) (*IndexHTMLData, error) {

	manifestJS, err := findLatest(path, regexp.MustCompile(`^\S+-manifest\.js$`))
	if err != nil {
		return nil, err
	}
	vuevendorJS, err := findLatest(path, regexp.MustCompile(`^\S+-vuevendor\.js$`))
	if err != nil {
		return nil, err
	}
	appJS, err := findLatest(path, regexp.MustCompile(`^\S+-app\.js$`))
	if err != nil {
		return nil, err
	}

	return &IndexHTMLData{
		ManifestJS:  filepath.Join(*prefix, manifestJS),
		VueVendorJS: filepath.Join(*prefix, vuevendorJS),
		AppJS:       filepath.Join(*prefix, appJS),
		Analytics:   true,
	}, nil
}

func toTemplate(t *template.Template, data interface{}) (string, error) {
	var result = &bytes.Buffer{}
	err := t.Execute(result, data)
	if err != nil {
		return "", err
	}

	return result.String(), nil
}

func findLatest(dir string, fileRegExp *regexp.Regexp) (string, error) {
	files, err := ioutil.ReadDir(dir)
	if err != nil {
		return "", err
	}

	var latest int64
	thefile := ""

	for _, file := range files {
		if fileRegExp.MatchString(file.Name()) && file.ModTime().UnixNano() > latest {
			latest = file.ModTime().UnixNano()
			thefile = file.Name()
		}
	}

	if latest == 0 {
		return "", fmt.Errorf("File not found %s/%+v", dir, fileRegExp)
	}

	return thefile, nil
}
