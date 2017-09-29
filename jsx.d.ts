declare namespace JSX {
  interface Element { }

  interface ElementAttributesProperty { $props: {}; }

  // allows to use "noImplicitAny": true in tsconfig.json
  interface IntrinsicElements {
    [elemName: string]: any;
  }

}