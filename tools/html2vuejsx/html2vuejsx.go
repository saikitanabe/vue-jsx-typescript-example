package main

import (
	"bytes"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"regexp"
	"text/template"
)

func main() {
	flag.Parse()
	if flag.NArg() != 2 {
		flag.Usage()
		os.Exit(1)
	}

	filename := flag.Arg(0)
	tmplFile := flag.Arg(1)

	t, err := template.
		New(tmplFile).
		ParseFiles(tmplFile)
	if err != nil {
		log.Fatalln(err)
		return
	}

	content, err := ioutil.ReadFile(filename)
	if err != nil {
		log.Fatalln(err)
	}

	// grab all content between <pre></pre> tags
	// (?s) enable to match also line breaks
	re := regexp.MustCompile(`(?s)<pre[^>]+>(.*)</pre>`)
	full := string(content)
	pres := re.FindAllStringSubmatch(full, -1)

	for _, p := range pres {
		if len(p) >= 2 {
			// replace using existing <pre ...>
			// fmt.Println(strings.Replace(p[0], p[1], replace(p[1]), 1))

			// convert using template
			conversion, err := toTemplate(t, replace(p[1]))
			if err != nil {
				log.Fatalln(err)
				return
			}

			fmt.Println(conversion)
		}
	}
}

func toTemplate(t *template.Template, content string) (string, error) {
	var result = &bytes.Buffer{}
	err := t.Execute(result, struct {
		Content string
	}{
		Content: content,
	})
	if err != nil {
		return "", err
	}

	return result.String(), nil
}

func replace(text string) string {
	re := regexp.MustCompile(`\r`)
	result := re.ReplaceAllString(text, "")

	re2 := regexp.MustCompile(`( {2,}|\n|\t|\{|\})`)
	result = re2.ReplaceAllStringFunc(result, func(s string) string {
		if s == string('\n') {
			return fmt.Sprintf(`{"\n"}`)
		}
		if s == string('\t') {
			return fmt.Sprintf(`{"\t"}`)
		}
		return fmt.Sprintf(`{"%s"}`, s)
	})

	return result
}
