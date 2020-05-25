<template>
  <div class="row" id="header">
    <div class="col-sm-9">
      <div id="naslov">
        <div class="title">Ocijenite vašeg profesora</div>
      </div>
      <div class="col">
        <ul type="button" class="navbar">
          <button class="button">
            <router-link class="link" to="/">
              <span>About</span>
            </router-link>
          </button>

          <button class="button">
            <router-link class="link" to="/popis">
              <span>Popis</span>
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

    <div class="col-sm-3">
      <div class="w3-center w3-animate-right" id="logo">
        <div class="logo-title">
          <div class="first-container share">
            <h1>
              <span id="one">P</span>
              <span>r</span>
              <span>o</span>
              <span>f</span>
              <span>a</span>
            </h1>
          </div>
          <div class="second-container share">
            <h1>
              <span>R</span>
              <span>a</span>
              <span>t</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.first-container,
.second-container {
  cursor: pointer;
  position: relative;
}
.first-container h1,
.second-container h1 {
  font-family: "Lobster", cursive;
  position: relative;
  font-weight: 500;
  color: rgba(51, 62, 121, 0.842);
}

.first-container {
  margin-bottom: 15px;
}

span {
  display: inline-block;
  position: relative;
  margin-right: 5px;
}
span:after {
  content: "";
  position: absolute;
  height: 100%;
  width: 0;
  top: 0;
  left: 0;
  transition: 0.6s;
  z-index: -5;
}

.share:hover > h1 > span:nth-child(1):after {
  background: rgba(51, 62, 121, 0.842);
  width: 100%;
  transition: 0.6s;
  transition-delay: 100ms;
  transform: rotate(-25deg);
}

.share:hover > h1 > span:nth-child(1) {
  color: white;
  transition-delay: 110ms;
}

.share:hover > h1 > span:nth-child(2):after {
  background: rgba(51, 62, 121, 0.842);
  width: 100%;
  transition: 0.6s;
  transition-delay: 200ms;
  transform: rotate(-20deg);
}

.share:hover > h1 > span:nth-child(2) {
  color: white;
  transition-delay: 220ms;
}

.share:hover > h1 > span:nth-child(3):after {
  background: rgba(51, 62, 121, 0.842);
  width: 100%;
  transition: 0.6s;
  transition-delay: 300ms;
  transform: rotate(-15deg);
}

.share:hover > h1 > span:nth-child(3) {
  color: white;
  transition-delay: 330ms;
}

.share:hover > h1 > span:nth-child(4):after {
  background: rgba(51, 62, 121, 0.842);
  width: 100%;
  transition: 0.6s;
  transition-delay: 400ms;
  transform: rotate(-10deg);
}

.share:hover > h1 > span:nth-child(4) {
  color: white;
  transition-delay: 440ms;
}

.share:hover > h1 > span:nth-child(5):after {
  background: rgba(51, 62, 121, 0.842);
  width: 100%;
  transition: 0.6s;
  transition-delay: 500ms;
  transform: rotate(-5deg);
}

.share:hover > h1 > span:nth-child(5) {
  color: white;
  transition-delay: 550ms;
}

.share:hover > h1 > span:nth-child(6):after {
  background: rgba(51, 62, 121, 0.842);
  width: 100%;
  transition: 0.6s;
  transition-delay: 600ms;
  transform: rotate(0deg);
}

.share:hover > h1 > span:nth-child(6) {
  color: white;
  transition-delay: 660ms;
}

#header {
  margin-bottom: 5%;
  text-align: center;
  background-size: cover;
  border-radius: 0px 0px 26px 26px;
}

#naslov {
  display: block;
  background: rgba(51, 62, 121, 0.842);
  border-radius: 0px 0px 25px 25px;
}

.title {
  padding-bottom: 1%;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #e0e0e0;
  opacity: 0;
  animation: in 30s ease-out forwards infinite;
  animation-delay: 1s;
  cursor: pointer;
  font-family: "Lobster", cursive;
  letter-spacing: 0.1em;
  transition: 0.3s;
}

.button {
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 15px;
  width: 30%;
  transition: all 0.5s;
  cursor: pointer;
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
  width: 100%;
  list-style: none;
}

.link {
  color: rgb(39, 25, 139);
  font-weight: bold;
}

@keyframes in {
  0% {
    letter-spacing: -17px;
    opacity: 0;
  }
  30% {
    letter-spacing: 4px;
    opacity: 1;
  }
  100% {
    letter-spacing: 4px;
    opacity: 1;
  }
}
</style>