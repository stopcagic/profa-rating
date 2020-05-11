<template>
  <div class="row" id="header">
    <div class="col-sm-8" id="naslov">
      <div class="title">Profa rating</div>
    </div>

    <div class="col-sm-4" id="logo ">LOGO</div>
    <div class="row">
      <ul type="button" class="navbar">
        <button class="button">
          <router-link class="link" to="/">
            <span>Home</span>
          </router-link>
        </button>
        <button class="button">
          <router-link class="link" to="/popis">
            <span>Popis</span>
          </router-link>
        </button>

        <button class="button">
          <router-link class="link" to="/about">
            <span>About</span>
          </router-link>
        </button>
        <button class="button">
          <router-link class="link" to="/prijava">
            <span>Prijava</span>
          </router-link>
        </button>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#header {
  margin-bottom: 5%;
  text-align: center;
  background-image: url("../assets/pozadina.png") no-repeat;
  background-size: cover;
  border-radius: 0px 0px 26px 26px;
}

#naslov {
  display: block;
  /*   background: rgba(51, 62, 121, 0.842); */

  border-radius: 0px 0px 25px 25px;
}

.title {
  padding-bottom: 1%;
  font-size: 30px;
  color: transparent;
  cursor: pointer;
  font-family: "Abril Fatface", cursive;
  letter-spacing: 0.1em;
  transition: 0.3s;
}

.title:hover {
  letter-spacing: 5px;
  color: #e0e0e0;
  text-shadow: black 1px 1px 0;
}

.button {
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 15px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

.navbar {
  width: 70%;
  list-style: none;
}
.navbar li {
  display: inline-block;
  letter-spacing: 0.5px;
}
.link {
  color: rgb(39, 25, 139);
  font-weight: bold;
}
</style>