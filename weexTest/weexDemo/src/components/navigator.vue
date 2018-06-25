<template>
  <div class="wrapper">
      <text class="button" @click="jump">jump</text>
  </div>
</template>

<script>
const modal = weeex.requireModule('modal');
const navigator = weeex.requireModule('navigator');
export default {
  data () {
      return {

      }
  },
  methods:{
      jump(event){
          navigator.push({
              url:''
          })
      }
  }
}
</script>

<style scoped>
    .wrapper{
        flex-direction: column;
        justify-content: center;
    }
    .button{
        font-size: 60px;
        width: 450px;
        text-align: center;
        margin-top: 30px;
        margin-left: 150px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-width: 1px;
        border-style:solid;
        color: #666666;
        border-color: #dddddd;
        background-color: #f5f5f5;
    }
</style>

