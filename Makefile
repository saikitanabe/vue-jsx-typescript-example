examples:
	make -C tools/html2vuejsx all

dev:
	make -C tools/deployment dev
	npm run dev

prod:
	npm run prod
	make -C tools/deployment prod
	rm -f prod.tar.gz
	rm dist/*.map
	tar zcvf prod.tar.gz index.html dist static

.PHONY: examples