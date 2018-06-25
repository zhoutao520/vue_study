<template>
    <div>
        <h2>{{msg}}</h2>
        <p>Id:{{$route.params.id}}</p>
        <p>Id:{{$route.params.title}}</p>
    </div>
</template>
<script>
export default {
  data(){
      return{
          msg:'params page'
      }
  },
  beforeRouteEnter: (to, from, next) => {
     console.log("准备进入params路由模板");
     next()
  },
  beforeRouteLeave: (to, from, next) => {
     console.log("准备离开params路由模板");
     next();
  }
}
</script>

