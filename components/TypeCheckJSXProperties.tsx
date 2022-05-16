import Vue from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'

import {VueComponent} from '../vue-ts-component'
import {BackToRoot} from './BackToRoot'

import ExVueTsComponent from '../examples/vue-ts-component-ts'
import ExComponentProps from '../examples/component-props'

@Component
export default class TypeCheckJSXProperties extends Vue {
  msg: string = ''

  mounted() {
    window.document.title = "Example: Type Check JSX Component Properties"

    if (this.getInputField()) {
      this.getInputField().focus()
    }
  }

  private getInputField() {
    return this.$refs.input as any
  }

  submit() {
  }

  render() {
    return (
      <div>
        <h2>Type Check JSX Component Properties</h2>

        <p>
          Following kind of code snippet gives type checking for JSX component properties. It works in similar way when using e.g. React.
        </p>

        <p>
          Add <strong>vue-ts-component.ts</strong> to your project.
        </p>

        <ExVueTsComponent />

        <h3>Using VueComponent</h3>

        Add vue-property-decorator to define component properties. Interface AProps is only used during the compile time to check what properties are passed to the component.

        <ExComponentProps />

        This code would lead to compile time failure due to missing property href. Helpful when refactoring your components.
        <pre>
          <code>
            {"<A title='my link title'>link name</A>"}
          </code>
        </pre>

        <div>
          <img src='static/component-properties-check.png' />
        </div>

        <BackToRoot />       
      </div>
    )
  }
}