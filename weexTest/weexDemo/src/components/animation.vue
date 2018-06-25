<template>
  <div class="wrapper">
    <div ref="test" @click="move" class="box"></div>
  </div>
</template>
<style scoped>
 .box{
   width:250px;
   height:250px;
   background-color:#DDD;
 }
 
</style>
<script>
  const modal = weex.requireModule('modal');
  const animation =weex.requireModule('animation');
  export default {
    data () {
      return {
       
      }
    },
    methods:{
       move () {
        var testEl = this.$refs.test;
        animation.transition(testEl, {
          styles: {
            color: '#FF0000',
            transform: 'translate(250px, 100px)',
            transformOrigin: 'center center'
          },
          duration: 800, //ms
          timingFunction: 'ease',
          delay: 0 //ms
        }, function () {
          modal.toast({ message: 'animation finished.' })
        })
      }
     
    }
  }
</script>