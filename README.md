# VUE-TimesCount-Down_demo
vue短信验证码倒计时组件

###父组件正确引用姿势
/**
 * 点击添加备注
 * @param  {data} 需要传给子组件的数据
 * @param  {second} 倒计时设定的数字
 * @param  {send} 子组件$emit()触发，父组件监听
 */
```html
<timer-btn ref="timerBtn" :data="data" :second="60" @send="onSend"></timer-btn>
```

```javascript
    onSend(val){
      //用户点击获取验证码，需要先输入图片验证码的时候，触发此事件
      this.imgCodeShowFlag = true
      this.requestId = uuid.v1().replace(/-/g, '')
      this.codeUrl = `/ziwork/captcha?requestId=${this.requestId}`
    },
```

