<template>
<div id="dashboard">
  <div class="y-banner"></div>

  <div class="y-body">
    <div class="container">

      <div class="y-analytic mb-3">
        <div class="row">
          <div class="col-sm-12 col-lg-4 mb-4">
            <div class="card y-card">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col">
                    <div class="wrapper">
                      <h3>{{ totalClass }}</h3>
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
          <div class="col-sm-12 col-lg-4 mb-4">
            <div class="card y-card">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col">
                    <div class="wrapper">
                      <h3>0</h3>
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
          <div class="col-sm-12 col-lg-4 mb-4">
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

      <div class="y-wrapper">
        <div class="row">
          <div class="col-lg-8 mb-4">
            <!-- components/MyClassDashboard -->
            <MyClass></MyClass>
          </div>
          <div class="col mb-4">
            <!-- components/LogClassDashboard -->
            <LogClass></LogClass>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {

  computed: {
    totalClass: function() {
      return this.$store.getters[this.Xyclass.g[2]]
    }
  },

  methods: {
    //
  },

  mounted() {
    //
  },

  data() {
    return {
      //
    }
  },

  components: {
    MyClass: require('./components/MyClassDashboard').default,
    LogClass: require('./components/LogClassDashboard').default,
  }
}
</script>
