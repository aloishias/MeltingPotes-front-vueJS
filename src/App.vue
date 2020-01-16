<template>
  <div id="app">
    <img alt="Dance" src="https://media.tenor.com/images/bcd51b836a2825175d1a6d7db4381cec/tenor.gif">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>
