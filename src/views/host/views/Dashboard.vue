<template>
<div id="dashboard">
  <Navbar></Navbar>
  <div class="y-banner">
    <img src="/assets/img/banner.png" alt="">
  </div>

  <div class="y-body">
    <div class="container">
      <div class="y-analytic">
        <div class="row">

          <div class="col-md-6 col-xl-4 mb-4">
            <div class="card y-card">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col">
                    <div class="wrapper">
                      <h3>7</h3>
                      <div class="icon-rounded icon-blue">
                        <i class="fas fa-calendar fa-2x"></i>
                      </div>
                    </div>
                    <div class="title">
                      <span>Kelas Tersedia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-xl-4 mb-4">
            <div class="card y-card">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col">
                    <div class="wrapper">
                      <h3>200</h3>
                      <div class="icon-rounded icon-orange">
                        <i class="fas fa-calendar fa-2x"></i>
                      </div>
                    </div>
                    <div class="title">
                      <span>Soal Tersedia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-xl-4 mb-4">
            <div class="card y-card">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col">
                    <div class="wrapper">
                      <h3>....</h3>
                      <div class="icon-rounded">
                        <i class="fas fa-clipboard-list fa-2x"></i>
                      </div>
                    </div>
                    <div class="title">
                      <a href="#">Analisis Lainnya</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import Navbar from './components/Navbar'

export default {

  computed: {
    //
  },

  methods: {
    checkToken: function() {
      //
    }
  },

  mounted() {
    this.checkToken()
  },

  data() {
    return {
      //
    }
  },

  components: {
    Navbar
  }
}
</script>

<style lang="scss">

</style>
