import{_ as s,o as n,c as t,e as a}from"./app-20960a52.js";const p={},o=a(`<h1 id="相簿活动列表" tabindex="-1"><a class="header-anchor" href="#相簿活动列表" aria-hidden="true">#</a> 相簿活动列表</h1><h2 id="获取相簿热门活动列表" tabindex="-1"><a class="header-anchor" href="#获取相簿热门活动列表" aria-hidden="true">#</a> 获取相簿热门活动列表</h2><blockquote><p>https://api.vc.bilibili.com/photo_activity/v2/Activity/list</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>活动类型</td><td>非必要</td><td>0：全部<br>1：展示类<br>2：比赛类</td></tr><tr><td>biz</td><td>num</td><td>分区</td><td>非必要</td><td>0：全部<br>1：画友<br>2：摄影<br>默认为0</td></tr><tr><td>page_num</td><td>num</td><td>页码</td><td>非必要</td><td>默认为4</td></tr><tr><td>page_size</td><td>num</td><td>每页项数</td><td>非必要</td><td>默认为0</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>1：参数错误</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>total_count</td><td>str</td><td>总计活动数</td><td></td></tr><tr><td>items</td><td>array</td><td>活动列表</td><td></td></tr></tbody></table><p><code>data</code>中的<code>items</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>活动 1</td><td></td></tr><tr><td>n</td><td>obj</td><td>活动 (n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>data</code>中的<code>items</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>cover</td><td>str</td><td>活动图片url</td><td></td></tr><tr><td>title</td><td>str</td><td>活动标题</td><td></td></tr><tr><td>link</td><td>str</td><td>活动页面url</td><td></td></tr><tr><td>type</td><td>num</td><td>活动类型</td><td>1：展示类<br>2：比赛类</td></tr><tr><td>biz</td><td>num</td><td>所属分区</td><td>1：画友<br>2：摄影</td></tr><tr><td>tag</td><td>str</td><td>活动关联的TAG</td><td></td></tr><tr><td>start_time</td><td>num</td><td>开始时间</td><td>时间戳</td></tr><tr><td>end_time</td><td>num</td><td>结束时间</td><td>时间戳</td></tr><tr><td>desc</td><td>str</td><td>备注</td><td></td></tr><tr><td>desc_type</td><td>num</td><td>活动状态</td><td>1：已结束<br>2：进行中</td></tr></tbody></table><p><strong>示例：</strong></p><p>获取<code>画友</code>分区，全部类型的5条活动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.vc.bilibili.com/photo_activity/v2/Activity/list&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;type=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;biz=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;page_num=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;page_size=5&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total_count&quot;</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
        <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vc/344d175cf88f217ce8bd0f004a2c5e770eff2e03.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#月饼拟人#创作大赛！丰厚奖励等你来拿！&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.bilibili.com/read/cv1102416&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;biz&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token number">1535817600</span><span class="token punctuation">,</span>
                <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token number">1540915200</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已结束&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vc/63d48fbc37f0142a9c72e06ebc950d4089f881d6.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;「ISLAND」同人绘画大赛&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.bilibili.com/blackboard/activity-rkOlNomMQ.html&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;biz&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISLAND同人绘画&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token number">1530720000</span><span class="token punctuation">,</span>
                <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token number">1534435200</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已结束&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vc/08d20bc6c10e1e310946ebaaf56c2c90c921644d.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我家大师兄脑子有坑同人绘画大赛&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.bilibili.com/blackboard/activity-S1lV0Ot6M.html&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;biz&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;兄坑同人绘画大赛&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token number">1525449600</span><span class="token punctuation">,</span>
                <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token number">1528473600</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已结束&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vc/4eb48398ec0824e96fc878235536f2e0b4a8aef5.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;国宝复“活”计划&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.bilibili.com/blackboard/activity-SJ4hL_UFz.html&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;biz&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;国宝复“活”计划&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token number">1521388800</span><span class="token punctuation">,</span>
                <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token number">1525017600</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;已结束&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vc/9068f91f62ea5a36cbafff263d7e47af99cc9836.jpg&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;画师专访——管郁生&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.bilibili.com/blackboard/interview-guanyusheng.html&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;biz&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token number">1517414400</span><span class="token punctuation">,</span>
                <span class="token property">&quot;end_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;进行中&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc_type&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,19),e=[o];function c(r,l){return n(),t("div",null,e)}const u=s(p,[["render",c],["__file","activity_list.html.vue"]]);export{u as default};
