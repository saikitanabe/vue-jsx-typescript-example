import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class InputExample extends Vue {
  // remember to initialize to get updates working
  msg: string = ''

  render() {
    return (
      <div>
        <input onInput={(e: any) => this.msg = e.target.value} />
      
        <p>Message property: {this.msg}</p>
      </div>
    )
  }
}