import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Ex extends Vue {
  render() {
    return (
      <pre class="chroma code prettyprint prettyprinted">
        <code class='code-content'>
          <span class="kr">import</span> <span class="nx">Vue</span> <span class="kr">from</span> <span class="s1">&#39;vue&#39;</span>{"\n"}{"\n"}<span class="kr">export</span> <span class="kr">class</span> <span class="nx">VueComponent</span><span class="p">&lt;</span><span class="nt">P</span><span class="p">&gt;</span> <span class="kr">extends</span> <span class="nx">Vue</span> <span class="p">{"{"}</span>{"\n"}{"  "}<span class="nx">$props</span>: <span class="kt">P</span>{"\n"}<span class="p">{"}"}</span>{"\n"}
        </code>
      </pre>
    )
  }
}
