import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import '../css/Links.css'

@Component
export class Examples extends Vue {
  render() {
    return (
      <div>
        <h2>Examples</h2>
        <ul>
          <li>
            <router-link to='input-update'>
              Input field updates component state
          </router-link>
          </li>
          <li>
            <router-link to='load-component-dynamically'>
              Load component dynamically
          </router-link>
          </li>
          <li>
            <router-link to='type-check-jsx-properties'>
              Type check support for JSX component properties
            </router-link>
          </li>
        </ul>
      </div>
    )
  }
}