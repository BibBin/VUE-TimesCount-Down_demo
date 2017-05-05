import uuid from 'uuid'
import Common from '../components/';
module.exports = {
  name: 'login',
  components: Common,
  data() {
    return {
      codeUrl: '',
      imgCodeShowFlag: false,
      typeFlag: '',
      data: {
        username: '',
        code: '',
        captcha: ''
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
      //用户点击获取验证码，需要先输入图片验证码的时候，触发此事件
      this.imgCodeShowFlag = true
        this.requestId = uuid.v1().replace(/-/g, '')
        this.codeUrl = `/ziwork/captcha?requestId=${this.requestId}`
    },
    
  },
  created() {
   
  },
  watch: {
   
  },
  mounted() {
    
   
  }
}
