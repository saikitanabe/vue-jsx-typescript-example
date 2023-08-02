import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

import { Jumbotron } from './components/Jumbotron'
import { Navigation } from './components/Navigation'
import { A } from './components/A'

import './css/Normalize.css'
import 'milligram'
import './css/App.css'

@Component
export default class App extends Vue {
  @Prop()
  msg: string

  // lifecycle hook
  mounted() {

  }

  render() {
    return (
      <main id='vueapp' class='wrapper'>

        <Navigation />

        <Jumbotron />

        <section class='container'>

          <router-view></router-view>

        </section>
      </main>
    )
  }
}