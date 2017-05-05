# VUE-TimesCount-Down_demo
vue短信验证码倒计时组件

##第一步
##VUE2.0组件之间通信的解释
vue2.0
父传子：Props
子传父：子：$emit(eventName) 父$on(eventName)
父访问子：ref
非父子组件通信:https://vuefe.cn/guide/components.html#非父子组件通信
vue2.0 移除：1.$dispatch() 2.$broadcast() 3.events

##第二步
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
###用户点击获取验证码，需要先输入图片验证码的时候，触发此事件
```javascript
    onSend(val){
      this.imgCodeShowFlag = true//开启图片验证码dom显示
      //相关操作用来调用图片验证码接口
      this.requestId = uuid.v1().replace(/-/g, '')//获取随机数
      this.codeUrl = `/ziwork/captcha?requestId=${this.requestId}`//尾增加随机数及时更新图片验证码
    },
```

##第三步
###子组件解读
体验异步的终极解决方案-ES7的Async/Await
```javascript
async runs () {
      if (!this.data.username) {
        this.$message.error('请输入手机号码');
      } else if (!(/^1[34578]\d{9}$/.test(this.data.username))) {
        this.$message.error('手机号格式不正确');
      } else {
        let data = {mobile:this.data.username,captcha:this.data.captcha}
        try {
          const resp = await getMeCodeApi(data)//获取短信验证码接口
          this.time = this.second
          this.timeFlag = true
          this.timer()
        } catch (e) {
          //当用户获取了三次短信验证码之后
            // 再次点击了获取短信验证码，返回{{status_code:201}}我们会要求用户先填写图片验证码
              //这里我们要emit一个事件，触发父组件图片验证码启动
          this.$message.error(e.msg)

          this.$emit('send', e)
        }
      }
    },
    timer: function () {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
      }
    }
```

