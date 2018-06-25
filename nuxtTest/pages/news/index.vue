<template>
  <div>
      <h2>news index page</h2>
      <p>newsId:{{$route.params.id}}</p>
      <ul>
          <li><nuxt-link :to="{name:'index'}">home</nuxt-link></li>
          <li><nuxt-link :to="{name:'news-id',params:{id:'123',title:'asdsad'}}">new-1</nuxt-link></li>
          <li><nuxt-link :to="{name:'news-id',params:{id:'aaa'}}">new-2</nuxt-link></li>
      </ul>
  </div>
</template>

<script>
export default {
  transition:'test'
}
</script>

