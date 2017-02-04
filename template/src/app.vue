<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css" rel="stylesheet" />
    {{#router}}
    <router-view></router-view>
    {{/router}}
  </div>
</template>

<script lang="ts">
import Vue = require("vue");

export default {
  name: "app",
} as Vue.ComponentOptions<Vue>;
</script>

<style lang="scss">
@import "./scss/_all.scss";
</style>
