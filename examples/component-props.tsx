import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Ex extends Vue {
  render() {
    return (
      <pre class="chroma code prettyprint prettyprinted">
        <code class='code-content'>
          <span class="kr">import</span> <span class="p">{"{"}</span> <span class="nx">Component</span><span class="p">,</span> <span class="nx">Prop</span> <span class="p">{"}"}</span> <span class="kr">from</span> <span class="s1">&#39;vue-property-decorator&#39;</span>{"\n"}{"\n"}<span class="kr">import</span> <span class="p">{"{"}</span><span class="nx">VueComponent</span><span class="p">{"}"}</span> <span class="kr">from</span> <span class="s1">&#39;../vue-ts-component&#39;</span>{"\n"}{"\n"}<span class="kr">interface</span> <span class="nx">AProps</span> <span class="p">{"{"}</span>{"\n"}{"  "}<span class="nx">href</span>: <span class="kt">string</span>{"\n"}{"  "}<span class="nx">title?</span>: <span class="kt">string</span>{"  "}{"\n"}<span class="p">{"}"}</span>{"\n"}{"\n"}<span class="kd">@Component</span>{"\n"}<span class="kr">export</span> <span class="kr">class</span> <span class="nx">A</span> <span class="kr">extends</span> <span class="nx">VueComponent</span><span class="p">&lt;</span><span class="nt">AProps</span><span class="p">&gt;</span> <span class="p">{"{"}</span>{"\n"}{"  "}<span class="kd">@Prop</span><span class="p">()</span>{"\n"}{"  "}<span class="nx">href</span>: <span class="kt">string</span>{"\n"}{"  "}<span class="kd">@Prop</span><span class="p">()</span>{"\n"}{"  "}<span class="nx">title</span>: <span class="kt">string</span>{"\n"}{"\n"}{"  "}<span class="nx">render() {"{"}</span>{"\n"}{"    "}<span class="k">return</span> <span class="p">(</span>{"\n"}{"      "}<span class="p">&lt;</span><span class="nt">a</span>{"\n"}{"        "}<span class="na">href</span><span class="o">=</span><span class="p">{"{"}</span><span class="k">this</span><span class="p">.</span><span class="nx">href</span><span class="p">{"}"}</span>{"\n"}{"        "}<span class="na">target</span><span class="o">=</span><span class="s">&#39;_blank&#39;</span>{"\n"}{"        "}<span class="na">title</span><span class="o">=</span><span class="p">{"{"}</span><span class="k">this</span><span class="p">.</span><span class="nx">title</span><span class="p">{"}"}</span>{"\n"}{"        "}<span class="na">rel</span><span class="o">=</span><span class="s">&#34;noopener noreferrer&#34;</span><span class="p">&gt;{"{"}</span><span class="k">this</span><span class="p">.</span><span class="nx">$slots</span><span class="p">.</span><span class="k">default</span><span class="p">{"}"}&lt;/</span><span class="nt">a</span><span class="p">&gt;</span>{"\n"}{"    "}<span class="p">)</span>{"\n"}{"  "}<span class="p">{"}"}</span>{"\n"}<span class="p">{"}"}</span>
        </code>
      </pre>
    )
  }
}
