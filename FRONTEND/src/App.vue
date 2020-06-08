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
  margin: 0;
  padding: 0;
  /*  background-image: linear-gradient(lightgray, white); */
  /*  background-image: url("assets/pozadina3.svg"); */
}
/* #app {
  background-image: url("assets/pozadina3.svg");
} */
</style>
