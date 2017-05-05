/**
 * Created by U on 2017/4/21.
 */
import {getMeCodeApi} from '../../../../src/api/account.js'
module.exports = {
  name: 'timerBtn',
  props: {
    second: {
      type: Number,
      default: 60
    },
    data: {},
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      time: 0,
      timeFlag: false
    }
  },
  methods: {
    async runs () {
      if (!this.data.username) {
        this.$message.error('请输入手机号码');
      } else if (!(/^1[34578]\d{9}$/.test(this.data.username))) {
        this.$message.error('手机号格式不正确');
      } else {
        let data = {mobile:this.data.username,captcha:this.data.captcha}
        try {
          const resp = await getMeCodeApi(data)
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
  },
  computed: {
    text: function () {
      if (this.timeFlag === false) {
        return '获取验证码'
      } else {
        return this.time > 0 ? this.time + 's' : '重新获取';
      }

    },
    style: function () {
      if (this.time > 0) {
        return this.style = 'phone-verifcode-out'
      } else {
        return this.style = 'phone-verifcode'
      }
    }
  },
  mounted() {

  }
}
