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
  padding: 0px;
  margin: 0px;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: black;
  -webkit-box-shadow: 0 0 0px 1000px white inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
