import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Ex extends Vue {
  render() {
    return (
      <pre class="chroma code prettyprint prettyprinted">
        <code class='code-content'>
          <span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s7e2">&#34;compilerOptions&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;lib&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s1388">[</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"      "}</span><span class="sc1c">&#34;dom&#34;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"      "}</span><span class="sc1c">&#34;es6&#34;</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s1388">],</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;target&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="sc1c">&#34;es2017&#34;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;module&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="sc1c">&#34;esnext&#34;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;moduleResolution&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="sc1c">&#34;node&#34;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;jsx&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="sc1c">&#34;preserve&#34;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;isolatedModules&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s3e8">false</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;experimentalDecorators&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s3e8">true</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;noImplicitAny&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s3e8">true</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;noImplicitThis&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s3e8">true</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;strictNullChecks&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s3e8">true</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;removeComments&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s3e8">true</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;suppressImplicitAnyIndexErrors&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s3e8">true</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7e2">&#34;allowSyntheticDefaultImports&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s3e8">true</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s1388">{"}"},</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s7e2">&#34;include&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s1388">[</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="sc1c">&#34;./**/*.ts&#34;</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s1388">],</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s7e2">&#34;exclude&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s1388">[</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="sc1c">&#34;node_modules&#34;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="sc1c">&#34;tools&#34;</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s1388">],</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s7e2">&#34;compileOnSave&#34;</span><span class="s1388">:</span><span class="s1f40"> </span><span class="s3e8">false</span><span class="s1f40">{"\n"}</span><span class="s1f40"></span><span class="s1388">{"}"}</span><span class="s1f40">{"\n"}</span><span class="s1f40"></span>
        </code>
      </pre>
    )
  }
}