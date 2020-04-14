<template>
  <div id="signup" class="container">
    <div class="card">
      <div class="card-body">
        <h1>Regitracija</h1>
        <div class="input-group mb-5">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="far fa-envelope"></i>
            </span>
          </div>
          <input type="email" name="email" required class="form-control" placeholder="Email" />
        </div>
        <div class="input-group mb-5">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="far fa-envelope"></i>
            </span>
          </div>
          <input
            type="email"
            name="email"
            required
            class="form-control"
            placeholder="Ponovite Email"
          />
        </div>

        <div class="input-group mb-5">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-key"></i>
            </span>
          </div>
          <input type="password" name="lozinka" required class="form-control" placeholder="Lozinka" />
        </div>
        <div class="input-group mb-5">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-key"></i>
            </span>
          </div>
          <input
            type="password"
            name="lozinka"
            required
            class="form-control"
            placeholder="Ponovite Lozinku"
          />
        </div>

        <div>
          <button type="submit" class="btn btn-primary btn-lg">Reigstriraj se</button>
        </div>

        <p class="text-center">
          Imate račun?
          <router-link to="/prijava" href="button">Prijavite se</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0px auto 10x;
  max-width: 800px;
  padding: 0px;
  font-family: "Gotu", sans-serif;
  text-align: center;
}
.card {
  margin: 0px auto 10px;
  width: 85%;
  background-color: #708090;
  border: 1px solid white;
  color: #272727;
  padding-top: 5%;
  color: #fff5ee;
}
.input-group {
  width: 50%;
  margin: 0 auto;
}
input[type="email"],
[type="password"] {
  background: transparent;
}
::placeholder {
  color: #fff5ee;
}
.btn {
  margin-bottom: 5%;
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 0.3px solid #4169e1;
  outline: none;
  transition: 0.3s ease-in-out;
  color: #fff5ee;
}
.btn:hover {
  transition: 1s ease-in-out;
  background: #4169e1;
}
h1 {
  margin-bottom: 5%;
}
</style>