import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Ex extends Vue {
  render() {
    return (
      <pre class="chroma code prettyprint prettyprinted">
        <code class='code-content'>
          <span class="p">{"{"}</span>{"\n"}{"  "}<span class="nt">&#34;presets&#34;</span><span class="p">:</span> <span class="p">[</span>{"\n"}{"    "}<span class="s2">&#34;env&#34;</span>{"\n"}{"  "}<span class="p">],</span>{"\n"}{"  "}<span class="nt">&#34;plugins&#34;</span><span class="p">:</span> <span class="p">[</span>{"\n"}{"    "}<span class="s2">&#34;transform-vue-jsx&#34;</span><span class="p">,</span>{"\n"}{"    "}<span class="s2">&#34;syntax-dynamic-import&#34;</span>{"\n"}{"  "}<span class="p">]</span>{"\n"}<span class="p">{"}"}</span>
        </code>
      </pre>
    )
  }
}
