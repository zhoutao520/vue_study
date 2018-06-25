<template>
  <div>
      <list>
        <cell v-for="(news,key) in lists" :key="key">
            <div class="panel">
                <text class="text">{{news.newsTitle}}</text>
                <text class="content">{{news.newsContent}}</text>
            </div>
        </cell>
      </list>
  </div>
</template>

<script>
const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');

export default {
  data () {
      return {
          lists:[],
      }
  },
  methods : {
      getNews(url,callback){
          return stream.fetch({
              methods:'GET',
              type:'json',
              url:url,
          },callback);
      }
  },
  created(){
      let url = 'http://www.jspang.com/DemoApi/newsApi.php';
      this.getNews(url,res => {
          modal.toast({
              message:'数据请求成功',
              duration:1
          });
          this.lists = res.data;
          console.log(res.data)
      })
  }
}
</script>

<style scoped>
    .panel{
        width: 600px;
        height: 250px;
        margin-left:75px;
        margin-top: 35px;
        margin-bottom: 35px;
        padding-left: 10px;
        flex-direction: column;
        justify-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(162,217,192);
        background-color: rgba(162,217,192,0.2);
        overflow: auto;
    }
    .text{
        font-size: 50px;
        text-align: center;
        color:#41b883;
    }
    .content{
        font-size: 28px;
    }
</style>
