<template>
  <div>
    <animation></animation>
  </div>
</template>

<script>
import topheader from './components/topHeader';
import inputtest from './components/inputTest';
import videotest from './components/videoTest';
import listtest from './components/listTest';
import stream from './components/stream';
import aweb from './components/aweb';
import commeven from './components/commeven';
import animation from './components/animation';
import { WxcButton, WxcPopup } from 'weex-ui';
  module.exports = {
    components: { WxcButton, WxcPopup, topheader, inputtest, videotest, listtest, stream, aweb, commeven, animation },
    data: () => ({
      isShow: false
    }),
    methods: {
      buttonClicked () {
        this.isShow = true;
      },
      overlayClicked () {
        this.isShow = false;
      }
    }
  };
</script>

<style scoped>
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
  .testImage{
    position: absolute;
    top: 0;
    width: 750px;
    height: 1250px;
  }
</style>
