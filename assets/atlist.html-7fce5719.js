import{_ as s,o as n,c as a,e as t}from"./app-20960a52.js";const p={},e=t(`<h1 id="根据关键字搜索用户-at别人时的填充列表" tabindex="-1"><a class="header-anchor" href="#根据关键字搜索用户-at别人时的填充列表" aria-hidden="true">#</a> 根据关键字搜索用户(at别人时的填充列表)</h1><p><strong>注意关键字不一定顺序匹配,如最后示例</strong></p><blockquote><p>https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/at_search</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（multipart/form-data）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th></tr></thead><tbody><tr><td>uid</td><td>num</td><td>自己的uid</td></tr><tr><td>keyword</td><td>str</td><td>搜索关键字</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>0成功</td></tr><tr><td>msg</td><td>str</td><td>成功为空文本</td></tr><tr><td>message</td><td>str</td><td>同msg</td></tr><tr><td>data</td><td>obj</td><td>数据本体</td></tr></tbody></table><p>data对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th></tr></thead><tbody><tr><td>groups</td><td>obj[]</td><td>内容分组(好像是根据关注列表分)</td></tr><tr><td>_gt_</td><td>num</td><td>0</td></tr></tbody></table><p>group对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th></tr></thead><tbody><tr><td>group_type</td><td>num</td><td>2:我的关注<br>4:其他</td></tr><tr><td>group_name</td><td>str</td><td>分组名字</td></tr><tr><td>items</td><td>obj[]</td><td>用户信息</td></tr></tbody></table><p>item对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th></tr></thead><tbody><tr><td>uid</td><td>num</td><td>用户id</td></tr><tr><td>uname</td><td>str</td><td>用户昵称</td></tr><tr><td>face</td><td>str</td><td>用户头像url</td></tr><tr><td>fans</td><td>num</td><td>用户粉丝数</td></tr><tr><td>official_verify_type</td><td>num</td><td>认证信息?</td></tr></tbody></table><details><summary>查看示例</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 搜索关键字:社会易</span>
<span class="token function">curl</span> <span class="token string">&#39;https://api.vc.bilibili.com/dynamic_mix/v1/dynamic_mix/at_search?uid=15858903&amp;keyword=%e7%a4%be%e4%bc%9a%e6%98%93&#39;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-H</span> <span class="token string">&#39;User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0&#39;</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;Accept: application/json, text/plain, */*&#39;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-H</span> <span class="token string">&#39;Referer: https://t.bilibili.com/&#39;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-H</span> <span class="token string">&#39;Cookie: SESSDATA=******&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;group_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;group_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我的关注&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">293793435</span><span class="token punctuation">,</span>
            <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;社会易姐QwQ&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;fans&quot;</span><span class="token operator">:</span> <span class="token number">1179</span><span class="token punctuation">,</span>
            <span class="token property">&quot;official_verify_type&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;group_type&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token property">&quot;group_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;其他&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">250129011</span><span class="token punctuation">,</span>
            <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;社会小伙肖子易&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/2ae12d7f71173baa8e00c4cfe97acb5a3de31566.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;fans&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token property">&quot;official_verify_type&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">394873001</span><span class="token punctuation">,</span>
            <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;社会你易叔&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i2.hdslb.com/bfs/face/bde2811aa895e349036aba9ece5630bcd1341ff0.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;fans&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;official_verify_type&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">486568790</span><span class="token punctuation">,</span>
            <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;社会主义接班人小易&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i2.hdslb.com/bfs/face/1ebb0d4aa8e2c4b532f82983503ec38b62a1820f.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;fans&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;official_verify_type&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">497214639</span><span class="token punctuation">,</span>
            <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;社会你易易&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/dccb52f3c15ba1bb99aac3c86e9825842cc95295.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;fans&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;official_verify_type&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">496622388</span><span class="token punctuation">,</span>
            <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;社会你易哥&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/daac5514a7622741f767c68b1cbc6b91e60b4798.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;fans&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;official_verify_type&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">457675287</span><span class="token punctuation">,</span>
            <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;易社会&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/632bf9dd17f4e9f2f12be2c0ad00cdacd2d825fa.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;fans&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;official_verify_type&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">123270058</span><span class="token punctuation">,</span>
            <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;周易社会&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i1.hdslb.com/bfs/face/c6100396729112230deb3b0972db1504e9ce21bf.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;fans&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;official_verify_type&quot;</span><span class="token operator">:</span> <span class="token number">-1</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;_gt_&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,17),o=[e];function c(l,u){return n(),a("div",null,o)}const r=s(p,[["render",c],["__file","atlist.html.vue"]]);export{r as default};
