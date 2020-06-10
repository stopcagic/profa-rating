<template>
  <div>
    <div id="app">
      <div id="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style >
#app {
  background-image: url("assets/app_pozadina.svg");
}
</style>
