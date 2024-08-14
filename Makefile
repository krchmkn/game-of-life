build:
	wasm-pack build --target web

serve:
	npx http-server -p 3000 -g -b

test:
	wasm-pack test --safari

run:
	make build && make serve

size:
	wc -c ./pkg/game_of_life_bg.wasm
