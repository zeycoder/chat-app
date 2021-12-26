<template>
  <div id="app">
    <div v-if="!login">
      <form @submit.prevent="enterName()">
        <input v-model="name" placeholder="Adınız" >
        <input type="submit" value="Giriş Yap" >
      </form>
    </div>
    <div v-else>
      Online kullanıcılar
      <ul>
        <li>test</li>
        <li>test</li>
      </ul>
      Mesajlar
      <ul>
        <li>mesaj</li>
        <li>mesaj</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login:false,
      name:""
    }
  },
  methods:{
    enterName(){
      this.login=true
      this.$socket.emit('new_user',this.name);
    }
  }
}
</script>
