import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Ex extends Vue {
  render() {
    return (
      <pre class="chroma code prettyprint prettyprinted">
        <code class='code-content'>
          <span class="kr">import</span> <span class="nx">Vue</span> <span class="kr">from</span> <span class="s1">&#39;vue&#39;</span><span class="p">;</span>{"\n"}<span class="kr">import</span> <span class="nx">VueRouter</span> <span class="kr">from</span> <span class="s1">&#39;vue-router&#39;</span><span class="p">;</span>{"\n"}{"\n"}<span class="nx">Vue</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">VueRouter</span><span class="p">)</span>{"\n"}{"\n"}<span class="kr">const</span> <span class="nx">LoadComponentDynamicallyExample</span> <span class="o">=</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="kr">import</span><span class="p">(</span>{"\n"}{"  "}<span class="s1">&#39;../components/LoadComponentDynamicallyExample&#39;</span>{"\n"}<span class="p">)</span>{"\n"}<span class="kr">export</span> <span class="k">default</span> <span class="k">new</span> <span class="nx">VueRouter</span><span class="p">({"{"}</span>{"\n"}{"  "}<span class="nx">mode</span><span class="o">:</span> <span class="s1">&#39;history&#39;</span><span class="p">,</span>{"\n"}{"  "}<span class="nx">routes</span><span class="o">:</span> <span class="p">[</span>{"\n"}{"    "}<span class="p">{"{"}</span>{"\n"}{"      "}<span class="nx">path</span><span class="o">:</span> <span class="s1">&#39;/load-component-dynamically&#39;</span><span class="p">,</span>{"\n"}{"      "}<span class="nx">component</span>: <span class="kt">LoadComponentDynamicallyExample</span>{"\n"}{"    "}<span class="p">{"}"},</span>{"\n"}{"    "}<span class="p">{"{"}</span>{"\n"}{"      "}<span class="nx">path</span><span class="o">:</span> <span class="s1">&#39;/&#39;</span><span class="p">,</span>{"\n"}{"      "}<span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;root&#39;</span>{"\n"}{"    "}<span class="p">{"}"}</span>{"\n"}{"  "}<span class="p">]</span>{"\n"}<span class="p">{"}"})</span>{"\n"}
        </code>
      </pre>
    )
  }
}
