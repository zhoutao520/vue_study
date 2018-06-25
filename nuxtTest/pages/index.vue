<template>
  <div>
    <div class="dist">
    </div>
    <ul>
      <li><nuxt-link :to="{name:'index'}">home</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">abourt</nuxt-link></li>
      <li><nuxt-link :to="{name:'ajaxTest'}">ajaxTest</nuxt-link></li>
      <li><nuxt-link :to="{name:'news',params:{id:'123'}}">news</nuxt-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>
  
<style>
  .dist{
    width: 100px;
    height: 300px;
    background-image: url('~/static/mm.jpg')
  }
</style>
