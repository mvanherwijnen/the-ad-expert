<template>
    <div id="addy-animation">
      <lottie :options="defaultOptions" :height="250" :width="250" v-on:animCreated="handleAnimation"/>
      <button v-on:click="jedi">Jedi</button>
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
    data() {
      return {
        anim: {},
        defaultOptions: {
          animationData: animationData,
          loop: false,
          autoplay: false,
        },
        animationSpeed: 1.5,
        intervalsWithoutAction: 0,
        active: false
      }
    },
    mounted() {

    },
    methods: {
      walkIn() {
        this.intervalsWithoutAction = 0;
        this.anim.playSegments([1, 150], true);
        this.active = true;
          const self = this;
          setInterval(function(){
              if (!self.active) {
                  return;
              }
              console.log(self.intervalsWithoutAction);
              switch (self.intervalsWithoutAction) {
                  case 1: self.impatient(false); break;
                  case 2: self.phone(false); break;
                  case 3: self.play(false); break;
              }
              self.intervalsWithoutAction++;
          }, 3000);
      },
      phone(userTriggered = true) {
          if (userTriggered) {
              this.intervalsWithoutAction = 0;
          }
          this.anim.playSegments([270, 360], true);
      },
      impatient(userTriggered = true) {
          if (userTriggered) {
              this.intervalsWithoutAction = 0;
          }
          this.anim.playSegments([150, 230], true);
      },
      angry() {
          this.intervalsWithoutAction = 0;
          this.anim.playSegments([230, 250], true);
      },
      wave() {
          this.intervalsWithoutAction = 0;
          this.anim.playSegments([[55, 90],[100, 150]], true);
      },
      jedi() {
        if (!this.active) {
            this.walkIn();
            return;
        }
        this.intervalsWithoutAction = 0;
        this.anim.playSegments([390, 400], true);
      },
      spongeBob() {
          if (!this.active) {
              this.walkIn();
              return;
          }
          this.intervalsWithoutAction = 0;
          this.anim.playSegments([360, 380], true);
      },
      randomAction() {
          if (!this.active) {
              this.walkIn();
              return;
          }
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
          this.intervalsWithoutAction = 0;
          this.anim.playSegments([45,0], true);
          this.active = false;
          this.$emit('walk-away')
      },
      pause() { this.anim.pause() },
      onSpeedChange() { this.anim.setSpeed(this.animationSpeed) },

    }
  }
</script>
