<template>
  <div class="container">
    <div id="app">
      <div id="nav">
        <app-header />
      </div>
      <div id="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import header from "@/components/header";

export default {
  name: "App",
  components: {
    "app-header": header
  }
};
</script>

<style >
body {
  font-family: "Gotu", sans-serif;
  margin: 0;
  padding: 0;
  /*  background-image: linear-gradient(lightgray, white); */
  background-image: url("assets/pozadina3.svg");
  background-repeat: no-repeat;
}
/* #app {
  background-image: url("assets/pozadina3.svg");
} */
</style>
