<template>
    <div id="app">
        <lottie :options="defaultOptions" :height="250" :width="250" v-on:animCreated="handleAnimation"/>
        <!-- <div>
            <p>Speed: x{{animationSpeed}}</p>
            <input type="range" value="1" min="0" max="3" step="0.5"
                   v-on:change="onSpeedChange" v-model="animationSpeed">
        </div> -->
        <!-- <button v-on:click="stop">stop</button>
        <button v-on:click="pause">pause</button>
        <button v-on:click="play">play</button> -->
        <button v-on:click="walkIn">walkIn</button>
        <button v-on:click="wave">wave</button>
    </div>
</template>

<script>
  import Lottie from '../helpers/Lottie';
  import animationData from '../assets/animations/addy.json';

  export default {
    name: 'app',
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        defaultOptions: {
          animationData: animationData,
          loop: false,
        },
        animationSpeed: 1
      }
    },
    methods: {
      walkIn() {
        this.anim.playSegments([1, 180]);
        this.anim.setSpeed(2);
      },
      wave() {
        this.anim.playSegments([[50, 80],[100, 150]]);
        this.anim.setSpeed(2);
      },
      handleAnimation: function (anim) {
        this.anim = anim;
      },

      // stop: function () {
      //   this.anim.stop();
      // },

      // play: function () {
      //   this.anim.play();
      // },

      // pause: function () {
      //   this.anim.pause();
      // },

      // onSpeedChange: function () {
      //   this.anim.setSpeed(this.animationSpeed);
      // }
    }
  }
</script>