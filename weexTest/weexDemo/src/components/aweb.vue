<template>
  <div class="wrapper">
      <web src="http://jspang.com" class="web" @pagestart="start" @pagefinish="finish"></web>
  </div>
</template>

<script>
const modal = weex.requireModule("modal");
export default {
  data() {
    return {};
  },
  methods: {
      start(){
          modal.toast({
              message:'pagestart'
          })
      },
      finish(){
          modal.toast({
              message:'pagefinish'
          })
      }
  }
};
</script>

<style scoped>
.wrapper {
  flex-direction: column;
  justify-content: center;
}
.web {
  margin-left: 75px;
  width: 600px;
  height: 750px;
  border-width: 2px;
  border-style: solid;
  border-color: #41b883;
}
</style>

