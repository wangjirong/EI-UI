<template>
  <div id="app">
    <EIButton size="medium" :disabled="true" :circle="true">按钮</EIButton>
    <EIButton size="small" type="success">按钮</EIButton>
    <EIButton size="mini" type="warning" :circle="true">按钮</EIButton>
    <EIButton size="large" type="danger">按钮</EIButton>
    <EIButton size="medium" type="success"></EIButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EIBUtton from "./package/Basic/Button.vue";

@Component
export default class App extends Vue {
  onClick(): void {
    console.log(1);
  }
}
</script>
<style lang="less">
button{
  margin: .5em;
}
</style>
