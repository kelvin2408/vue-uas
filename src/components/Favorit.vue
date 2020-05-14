<template>
  <div class="home">
      <!-- <h1>This is a search page</h1> -->
    <div class="row my-5">
        <center>
        <div class="form-inline" style="width: 100%;">
        </div>
        </center>
    </div>
    <div class="row">
        <div class="col-md-3" v-for="result in fav" :key="result.id" style="text-align: center;">
          <router-link :to="{ name: 'Detail', params: { id: result.id } }">
          <div class="card" style="width: 15rem; height: 90%;">
            <img class="card-img-top" :src="result.picture">
            <div class="card-body">
              <h5 class="card-title">{{result.name}}</h5>
             <span class="badge badge-pill badge-primary">{{result.category}}</span>
            </div>
          </div>
          </router-link>`
        </div>
    </div>
  </div>
</template>

<script>
const STORAGE_KEY = 'DATAFAVORIT'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Search',
      query: '',
      results: '',
      fav: []

    }
  },
  async created () {
    this.fav = JSON.parse(localStorage.getItem(STORAGE_KEY) || [])
    console.log(this.fav)
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
