<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Grid msg="I am a grid dawg" feed-url="https://news.ycombinator.com/rss"/>
    <Stream msg="Uhhhhhhh"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Stream from './components/Stream.vue'
import Entry from './components/Entry.vue'
import Grid from './components/Grid.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Stream,
    Entry,
    Grid,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
