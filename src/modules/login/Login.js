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
    //获取验证码

    onSend(val){
      this.imgCodeShowFlag = true
      if(val.imgcode_url){
        this.requestId = uuid.v1().replace(/-/g, '')
        this.codeUrl = `/ziwork/captcha?requestId=${this.requestId}`
      }
    },
    
  },
  created() {
   
  },
  watch: {
   
  },
  mounted() {
    
   
  }
}
