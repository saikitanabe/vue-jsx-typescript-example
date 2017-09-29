import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Ex extends Vue {
  render() {
    return (
      <pre class="chroma code prettyprint prettyprinted">
        <code class='code-content'>
          <span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s7e2">&#34;presets&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s1388">[</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="sc1c">&#34;env&#34;</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s1388">],</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s7e2">&#34;plugins&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s1388">[</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="sc1c">&#34;transform-vue-jsx&#34;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="sc1c">&#34;syntax-dynamic-import&#34;</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s1388">]</span><span class="s1f40">{"\n"}</span><span class="s1f40"></span><span class="s1388">{"}"}</span>
        </code>
      </pre>
    )
  }
}
