<style scoped lang="less">
  .phone-verifcode {
    position: absolute;
    right: 10px;
    top: 7px;
    background: #2878FF;
    border-radius: 2px;
    width: 70px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border: 1px solid #2878FF;
    &:hover{
       background: #105DDF;
     }
  }

  .phone-verifcode-out {
    position: absolute;
    right: 10px;
    top: 7px;
    border-radius: 2px;
    width: 70px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background: #bcbcbc;
    border: 1px solid #bcbcbc;
  }
</style>
<template>
  <button type="button" @click="runs" :class="style" :disabled="disabled || time > 0">
    {{ text }}
  </button>
</template>
<script>
  import indexJs from './index.js';
  export default indexJs;
</script>
