<template>
  <div id="app">
    <facebook-editor msg="Welcome to Your Vue.js App"/>
    <!-- <addy-animation-frame/> -->
  </div>
</template>

<script>
import FacebookEditor from './pages/FacebookEditor.vue'
import AddyAnimationFrame from './components/AddyAnimationFrame.vue'

export default {
  name: 'app',
  components: {
    FacebookEditor,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

:root {
  --color-white: #ffffff;
  --border-light: #dfdfdf;
}

#app {
  height: 100vh;
}

html {
  font-family: 'Poppins', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
