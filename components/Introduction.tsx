import Vue from 'vue'
import Component from 'vue-class-component'

import {A} from '../components/A'
import { Examples } from './Examples'

@Component
export class Introduction extends Vue {

  mounted() {
    window.document.title = "Vue.js, JSX and TypeScript Example"
  }

  render() {
    return <div>
      <h2>Introduction</h2>

      <p>
        This example application demonstrates how to use Vue.js, JSX and TypeScript.
            Example uses <A href='https://webpack.js.org/guides/code-splitting/' targetBlank={true}>Webpack 2 Code Splitting</A>  to split and load components dynamically.
      </p>

      <p>
        Working example source code can be found from <A href='https://github.com/saikitanabe/vue-jsx-typescript-example' targetBlank={true}>GitHub</A>.
      </p>

      <Examples />
    </div>
  }
}