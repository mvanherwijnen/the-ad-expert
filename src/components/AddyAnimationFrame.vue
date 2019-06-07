<template>
    <div id="addy-animation">
      <lottie :options="defaultOptions" :height="250" :width="250" v-on:animCreated="handleAnimation"/>
      <button v-on:click="spongeBob">SpongeBob</button>
      <!--button v-on:click="wave">Wave</button>
      <button v-on:click="play">Walk out</button>
      <button v-on:click="phone">phone</button>
        <button v-on:click="angry">angry</button>
        <button v-on:click="impatient">impatient</button-->
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
    props: [
        'active'
    ],
    data() {
      return {
        anim: {},
        defaultOptions: {
          animationData: animationData,
          loop: false,
          autoplay: false,
        },
        animationSpeed: 1.5,
      }
    },
    watch: {
        active: function (newValue) {
            if (newValue) {
                this.walkIn();
            }
        }
    },
    mounted() {
      //this.anim.playSegments([1,0]);
    },
    methods: {
      walkIn() {
        this.anim.playSegments([1, 150], true);
      },
      phone() {
        this.anim.playSegments([270, 360], true);
      },
      impatient() {
        this.anim.playSegments([150, 230], true);
      },
      angry() {
        this.anim.playSegments([230, 250], true);
      },
      wave() {
        this.anim.playSegments([[55, 90],[100, 150]], true);
      },
      spongeBob() {
        this.anim.playSegments([360, 380], true);
      },
      randomAction() {
        let number = Math.floor(Math.random() * 4);
        switch (number) {
            case 0: this.phone(); break;
            case 1: this.impatient(); break;
            case 2: this.angry(); break;
            case 3: this.wave(); break;
            default: this.wave(); break;
        }
      },
      handleAnimation(anim) { this.anim = anim },
      stop() { this.anim.stop() },
      play() {
        this.anim.playSegments([45,0], true);
      },
      pause() { this.anim.pause() },
      onSpeedChange() { this.anim.setSpeed(this.animationSpeed) },

    }
  }
</script>
