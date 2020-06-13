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
body {
  background-image: linear-gradient(to right, #014083, #178c9e);
}
</style>
