import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import {VueComponent} from '../vue-ts-component'
import Config from '../Config'

interface BackToRootProps {
}

@Component
export class BackToRoot extends VueComponent<BackToRootProps> {
  render() {
    return (
      <div>
        <router-link to={Config.rootPath()}>← To examples</router-link>
      </div>
    )
  }
}
