<template>
  <div>
      <!-- <list @loadmore="fetch" loadmoreoffset="10"> -->
      <list>
          <refresh @refresh="onrefresh" @pullingdown="onpullingdown" :display="showRefresh">
            <text >Refreshing...</text>
          </refresh>
          <cell v-for="(rum,key) in lists" :key="key">
              <div class="panel">
                  <text class="text">{{rum}}</text>
              </div>
          </cell>
          <loading class="loading" @loading="onloading" :display="showLoading">
              <text class="indicator">loading...</text>
          </loading>
      </list>
  </div>
</template>

<script>
const modal = weex.requireModule('modal')
export default {
  data () {
      return {
          lists:[1,3,2,4,5],
          showLoading:'hide',
          showRefresh:'hide'
      }
  },
  methods : {
      fetch(event){
          modal.toast({
              message:'loadmore',
              duration:1
          });
          setTimeout(() => {
              const length = this.lists.length;
              for(let i = length ; i<length+4;i++){
                  this.lists.push(i+1);
              }
          },800)
      },
      onloading(event){
           modal.toast({
              message:'loading',
              duration:1
          });
          this.showLoading="show";
          setTimeout(() => {
              const length = this.lists.length;
              for(let i = length ; i<length+4;i++){
                  this.lists.push(i+1);
              }
              this.showLoading="hide";
          },800)
      },
      onrefresh(event){
          modal.toast({
              message:'refresh',
              duration:1
          });
          this.showRefresh = 'show';
          setTimeout(() => {
              this.lists = [1,2,3,4,5];
              this.showRefresh = 'hide'
          }, 800);
      },
      onpullingdown(event){
           modal.toast({
              message:'pulling',
              duration:1
          });
      }
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
        flex-direction: column;
        justify-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(162,217,192);
        background-color: rgba(162,217,192,0.2);
    }
    .text{
        font-size: 50px;
        text-align: center;
        color:#41b883;
    }
    .indicator{
        text-align: center;
    }
</style>
