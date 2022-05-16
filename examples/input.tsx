import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Ex extends Vue {
  render() {
    return (
      <pre class="chroma code prettyprint prettyprinted">
        <code class='code-content'>
          <span class="kr">import</span> <span class="nx">Vue</span> <span class="kr">from</span> <span class="s1">&#39;vue&#39;</span>{"\n"}<span class="kr">import</span> <span class="nx">Component</span> <span class="kr">from</span> <span class="s1">&#39;vue-class-component&#39;</span>{"\n"}{"\n"}<span class="kd">@Component</span>{"\n"}<span class="kr">class</span> <span class="nx">InputExample</span> <span class="kr">extends</span> <span class="nx">Vue</span> <span class="p">{"{"}</span>{"\n"}{"  "}<span class="c1">// remember to initialize to get updates working{"\n"}</span><span class="c1"></span>{"  "}<span class="nx">msg</span>: <span class="kt">string</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span>{"\n"}{"\n"}{"  "}<span class="nx">render() {"{"}</span>{"\n"}{"    "}<span class="k">return</span> <span class="p">(</span>{"\n"}{"      "}<span class="p">&lt;</span><span class="nt">div</span><span class="p">&gt;</span>{"\n"}{"        "}<span class="p">&lt;</span><span class="nt">input</span> <span class="na">onInput</span><span class="o">=</span><span class="p">{"{"}(</span><span class="nx">e</span>: <span class="kt">any</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">msg</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">value</span><span class="p">{"}"}</span> <span class="p">/&gt;</span>{"\n"}{"      "}{"\n"}{"        "}<span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span><span class="nx">Message</span> <span class="nx">property</span><span class="o">:</span> <span class="p">{"{"}</span><span class="k">this</span><span class="p">.</span><span class="nx">msg</span><span class="p">{"}"}&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>{"\n"}{"      "}<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>{"\n"}{"    "}<span class="p">)</span>{"\n"}{"  "}<span class="p">{"}"}</span>{"\n"}<span class="p">{"}"}</span>
        </code>
      </pre>
    )
  }
}
