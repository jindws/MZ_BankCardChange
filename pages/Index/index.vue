<template>
  <section id='index'>
      <div class="changing" v-if='true'>
          您有正在审核的银行卡更换信息，请勿重复操作。 <a href="javascript:;">查看审核进度 </a>
      </div>
      <p>为了保证您的资金安全，请您做好以下准备：</p>
      <dl>
        <dd>
          <p>确认您要更换的新银行卡已在平台绑定；</p>
          <label>新银行卡没有绑定？请至“我的资产”-“银行卡”进行新卡绑定</label>
        </dd>
        <dd><p>本人手持身份证(正反两面)及新银行卡(正反两 面)的照片；</p></dd>
      </dl>
      <p>温馨提示：为了保证您的资金安全，原卡持有金额超过5万可能需要您提供其他证明，工作人员将会与您电话联系。</p>
      <router-link class='btn_submit' :to="'main'">资料已备好,开始更换</router-link>
  </section>
</template>

<script>
export default {
}
</script>
