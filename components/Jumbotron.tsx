import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import Config from '../Config'
import {A} from './A'
import '../css/Header.css'

@Component
export class Jumbotron extends Vue {
  render() {
    return (
      <header class="header" id="home">
        <section class="container">
          <h1 class="title">Vue.js, JSX and TypeScript Example</h1>
          <p class="description">A simple Vue.js example application<br />
            <i>
              <A
                href='https://sketchboard.io'
                className='sketchboard'
                targetBlank={true}><small>by <span class='red'
                >sketch</span>board.io</small></A>
            </i>
          </p>
          {/* <a class="button" href={`${Config.rootPathName()}/#get-started`} title="Getting Started">To examples</a> */}
          {/* <router-link class='button' to={Config.rootPath()}>← To examples</router-link> */}
       </section>
      </header>
    )
  }
}