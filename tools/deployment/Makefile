build:
	go build -o deployment

dev: build
	./deployment --dev --prefix dist ../../dist > ../../index.html

prod: build
	./deployment --prod --prefix dist ../../dist > ../../index.html
