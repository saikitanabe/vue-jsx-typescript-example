import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { VueComponent } from '../vue-ts-component'
import { BackToRoot } from './BackToRoot'
import { Block } from './A'

import ExRouter from '../examples/router'
import ExWebpackConfig from '../examples/webpack-config-js'
import ExTsConfig from '../examples/tsconfig-json'
import ExBabelConfig from '../examples/babelrc'


@Component
class Structure extends Vue {
  render() {
    return (
      <div>
        <img src='static/structure.svg' />
      </div>
    )
  }
}

interface FirstPageProps {

}

@Component
export default class LoadComponentDynamicallyExample extends VueComponent<FirstPageProps> {
  render() {
    return (
      <div>
        <h2>Load Vue Components Dynamically</h2>

        <p>
          Vue router loads this page dynamically with the help of Webpack 2 Code Splitting.
        </p>

        <Structure />

        <h3>Vue Router Configuration</h3>

        <p>
          TypeScript syntax to load components dynamically:
        </p>

        <Block>const Component = () => './Component'</Block>

        <ExRouter />

        <h3>Webpack 2 Code Splitting Configuration</h3>

        <div>
          <strong>webpack.config.js</strong>
        </div>

        <ExWebpackConfig />

        <h3>TypeScript Configuration</h3>
        <p>
          Set <strong>target</strong> as "es2017" and <strong>module</strong> to "esnext" to generate code for Babel.
        </p>

        <div>
          <strong>tsconfig.json</strong>
        </div>

        <ExTsConfig />

        <h3>Babel configuration</h3>
        <p>
          Add plugin syntax-dynamic-import. Then Babel transpiles import statements correctly for Webpack 2 to enable code splitting.
        </p>

        <div>
          <strong>tsconfig.json</strong>
        </div>

        <ExBabelConfig />

        <BackToRoot />
      </div>
    )
  }
}
