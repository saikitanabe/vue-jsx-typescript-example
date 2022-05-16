import Vue from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'

import {VueComponent} from '../vue-ts-component'
import {BackToRoot} from './BackToRoot'

import ExInput from '../examples/input'

interface HighlightProps {
  value: string
  language: string
}

@Component
export class Highlight extends VueComponent<HighlightProps> {
  @Prop()
  value: string

  @Prop()
  language: string

  private getPre(): HTMLElement {
    return this.$refs.pre as HTMLElement
  }

  mounted() {
  }

  render() {
    return (
      <pre class="code prettyprint prettyprinted">
        <code class={`code-content ${this.language}`} ref='pre'>
          {this.value}
        </code>
      </pre>
    )
  }
}

@Component
export default class InputExample extends Vue {
  msg: string = 'Change me!'

  mounted() {
    this.getInputField().select()
    window.document.title = "Example: Input Field Updates Component State"
  }

  private getInputField() {
    return this.$refs.input as any
  }

  render() {
    return (
      <div>
        <h2>Input Field Updates Component State</h2>

        <input
          type='text'
          placeholder='Type a message'
          onInput={(e: any) => this.msg = e.target.value}
          style={{ width: '100%' }}
          ref='input'
          value={this.msg} />

        <div>
          Message echoed: <span class='underline'>{this.msg}</span>
        </div>

        <ExInput />

        <BackToRoot />       
      </div>
    )
  }
}