<template>
  <div class="naslov">
    <div class="col">
      <ul type="button" class="navbar">
        <button class="button">
          <router-link class="link" to="/">
            <a class="dugme">About</a>
          </router-link>
        </button>

        <button class="button">
          <router-link class="link" to="/popis">
            <a class="dugme">Popis</a>
          </router-link>
        </button>

        <button class="button">
          <router-link class="link" to="/prijava">
            <a class="dugme">Prijava</a>
          </router-link>
        </button>
        <button class="button">
          <router-link class="link" to="/prijava">
            <a class="dugme odjava">Odjavi se</a>
          </router-link>
        </button>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.odjava:hover {
  color: rgb(219, 6, 6);
}
ul {
  float: right;
}
.naslov {
  height: 40px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.384);
  backdrop-filter: blur(5px);
  transition: 2s;
}

.button {
  background-color: transparent;
  border: none;
  color: gray;
  font-size: 15px;
  transition: all 0.5s;
  cursor: pointer;
}
.button .dugme {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button .dugme:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover .dugme {
  padding-right: 25px;
}

.button:hover .dugme:after {
  opacity: 1;
  right: 0;
}

.link {
  color: white;
  font-weight: bold;
}
</style>