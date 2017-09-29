import { Component, Prop } from 'vue-property-decorator'

import {VueComponent} from '../vue-ts-component'

interface AProps {
  href: string
  title?: string  
}

@Component
export class A extends VueComponent<AProps> {
  @Prop()
  href: string
  @Prop()
  title: string

  render() {
    return (
      <a
        href={this.href}
        target='_blank'
        title={this.title}
        rel="noopener noreferrer">{this.$slots.default}</a>
    )
  }
}