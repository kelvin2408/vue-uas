<template>
  <div class="container">
      <!-- <h1>This is a search page</h1> -->
    <div class="row">
        <div class="col-md-3" v-for="result in results" :key="result.idIngredient" style="text-align: center;">
          <router-link :to="{ name: 'FilterIngredient', params: { name: result.strIngredient } }">
            <div class="card" style="width: 15rem; height: 90%;">
              <div class="card-body">
                <h5 class="card-title">{{result.strIngredient}}</h5>
              </div>
            </div>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Foods',
  data () {
    return {
      results: []
    }
  },
  mounted () {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(response => {
      console.log(response.data.meals)
      this.results = response.data.meals
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
