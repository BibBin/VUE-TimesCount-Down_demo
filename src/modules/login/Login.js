import uuid from 'uuid'
import Common from '../components/';
module.exports = {
  name: 'login',
  components: Common,
  data() {
    return {
      codeUrl: '',
      disabled: false,
      imgCodeShowFlag: false,
      typeFlag: '',
      data: {
        username: '',
        code: '',
        captcha: '',
      },
    }
  },
  computed:{
    pubTitle: function(){
      return this.typeFlag == true ? '登录' : '注册';
    }
  },
  methods: {
      onSend(val){
          this.imgCodeShowFlag = true//开启图片验证码dom显示
          //相关操作用来调用图片验证码接口
          this.requestId = uuid.v1().replace(/-/g, '')//获取随机数
          this.codeUrl = `/ziwork/captcha?requestId=${this.requestId}`//尾增加随机数及时更新图片验证码
      },
  },
  created() {
   
  },
  watch: {
   
  },
  mounted() {
    
   
  }
}
