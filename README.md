# vue-jsx-typescript-example

A simple Vue.js example application. Demonstrates Vue.js, JSX and TypeScript application to load components dynamically.

Browse the source code or see it running at https://sketchboard.io/vue-jsx-typescript-example/.

## Installation

```
npm install
```

## DEV run the application

```
npm run dev
```

Run webserver in index.html folder. Found in ~/Documents/sources/go/src/sketchboard.io/gotools
```
webserver .
```

Open web browser at http://localhost:8081

## Development Vue compilation fixes

Fix compliation errors => add | any

```
type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent | any;
```

Fix compliation errors => add | any
```
use<T>(plugin: PluginObject<T> | PluginFunction<T> | any, options?: T): VueConstructor<V>;
```