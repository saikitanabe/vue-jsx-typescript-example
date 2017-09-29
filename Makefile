examples:
	make -C tools all

dev:
	make -C tools/deployment dev
	npm run dev

prod:
	npm run prod
	make -C tools/deployment prod
	rm -f prod.tar.gz
	rm dist/*.map
	tar zcvf prod.tar.gz index.html dist static