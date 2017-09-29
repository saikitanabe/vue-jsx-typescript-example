build:
	go build -o html2vuejsx html2vuejsx.go

all: build ex-input ex-router ex-webpack-config ex-vue-ts-component ex-ts-config ex-babel-config ex-component-props

ex-input:
	chroma --html --html-tab-width=2 --style=monokai --html-only ex/input.tsx > ex/input.html
	html2vuejsx ex/input.html vue.tsx.tmpl > ../../examples/input.tsx

ex-router:
	chroma --html --html-tab-width=2 --style=monokai --html-only ex/router.ts > ex/router.html
	html2vuejsx ex/router.html vue.tsx.tmpl > ../../examples/router.tsx

ex-component-props:
	chroma --html --html-tab-width=2 --style=monokai --html-only ex/component-props.tsx > ex/component-props.html
	html2vuejsx ex/component-props.html vue.tsx.tmpl > ../../examples/component-props.tsx

ex-webpack-config:
	chroma --html --html-tab-width=2 --style=monokai --html-only ../../webpack.config.js > ex/webpack.config.js.html
	html2vuejsx ex/webpack.config.js.html vue.tsx.tmpl > ../../examples/webpack-config-js.tsx

ex-ts-config:
	chroma --html --html-tab-width=2 --style=monokai --html-only ../../tsconfig.json > ex/tsconfig.json.html
	html2vuejsx ex/tsconfig.json.html vue.tsx.tmpl > ../../examples/tsconfig-json.tsx

ex-babel-config:
	chroma --html --html-tab-width=2 --lexer=json --style=monokai --html-only ../../.babelrc > ex/.babelrc.html
	html2vuejsx ex/.babelrc.html vue.tsx.tmpl > ../../examples/babelrc.tsx

ex-vue-ts-component:
	chroma --html --html-tab-width=2 --style=monokai --html-only ../../vue-ts-component.ts > ex/vue-ts-component.ts.html
	html2vuejsx ex/vue-ts-component.ts.html vue.tsx.tmpl > ../../examples/vue-ts-component-ts.tsx
