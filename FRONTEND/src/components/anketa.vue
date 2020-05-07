<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h2>*</h2>
        <p>Koliko vam je sadržaj kolegija bio zanimljiv?</p>
        <p>(1- posve nezanimljiv, 5- veoma zanimljiv)</p>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input type="radio" id="option1" name="question1" value="1" />
          <label class="checkboxtext" for="option1">1</label>
        </div>
        <div class="form-group">
          <input type="radio" id="option2" name="question1" value="2" />
          <label class="checkboxtext" for="2">2</label>
        </div>
        <div class="form-group">
          <input type="radio" id="option3" name="question1" value="3" />
          <label class="checkboxtext" for="3">3</label>
        </div>
        <div class="form-group">
          <input type="radio" id="option4" name="question1" value="4" />
          <label class="checkboxtext" for="4">4</label>
        </div>
        <div class="form-group">
          <input type="radio" id="option5" name="question1" value="5" />
          <label class="checkboxtext" for="5">5</label>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h2>*</h2>
        <p>Koliko su zahtjevi kolegija bili jasni?</p>
        <p>(1- posve nejasni, 5- u potpunosti jasni))</p>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input type="radio" id="option1" name="question2" value="1" />
          <label class="checkboxtext" for="option1">1</label>
        </div>
        <div class="form-group">
          <input type="radio" id="option2" name="question2" value="2" />
          <label class="checkboxtext" for="2">2</label>
        </div>
        <div class="form-group">
          <input type="radio" id="option3" name="question2" value="3" />
          <label class="checkboxtext" for="3">3</label>
        </div>
        <div class="form-group">
          <input type="radio" id="option4" name="question2" value="4" />
          <label class="checkboxtext" for="4">4</label>
        </div>
        <div class="form-group">
          <input type="radio" id="option5" name="question2" value="5" />
          <label class="checkboxtext" for="5">5</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["info"]
};
</script>
<style  scoped>
.card {
  margin: 0px auto 10px;
  width: 55%;
  background-color: #f2f3f5;
  color: #272727;
  color: gray;
  margin-top: 5%;
}
input[type="radio"] {
  transform: scale(1.75);
  cursor: pointer;
}

.checkboxtext {
  font-size: 120%;
  margin-left: 5%;
}
.form-group {
  margin-left: 15%;
}
</style>
