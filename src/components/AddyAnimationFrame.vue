<template>
    <div id="addy-animation">
      <lottie :options="defaultOptions" :height="250" :width="250" v-on:animCreated="handleAnimation"/>
      <button v-on:click="walkIn">Walk in</button>
      <button v-on:click="wave">Wave</button>
      <button v-on:click="play">play</button>
    </div>
</template>

<script>
  import Lottie from '../helpers/Lottie';
  import animationData from '../assets/animations/addy.json';

  export default {
    name: 'addy-animation',
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        anim: {},
        defaultOptions: {
          animationData: animationData,
          loop: false,
          autoplay: false,
        },
        animationSpeed: 2,
      }
    },
    mounted() {
      // window.setTimeout(() => {
      //   this.play();
      // }, 8000)
    },
    methods: {
      walkIn() {
        this.anim.playSegments([1, 180]);
      },
      wave() {
        this.anim.playSegments([[55, 90],[100, 150]]);
      },
      handleAnimation(anim) { this.anim = anim },
      stop() { this.anim.stop() },
      play() {
        this.anim.playSegments([45,0]);
      },
      pause() { this.anim.pause() },
      onSpeedChange() { this.anim.setSpeed(this.animationSpeed) },

    }
  }
</script>
