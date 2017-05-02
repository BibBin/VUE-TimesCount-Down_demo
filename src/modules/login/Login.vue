<style lang='less'>
  @import "style.less";
</style>
<template>
<div>
<!--省略input的手机号，短信验证码，图片验证码，重点看下面，哈哈 -->
<timer-btn :disabled="disabled" ref="timerBtn" :data="data" :second="60" @send="onSend"></timer-btn>
</div>
</template>
<script>
  import LoginJs from './Login.js';
  export default LoginJs;
</script>

