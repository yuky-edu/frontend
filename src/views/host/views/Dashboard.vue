<template>
<div id="dashboard">
  <div class="y-banner"></div>

  <div class="y-body">
    <div class="container">

      <div class="y-analytic mb-3">
        <div class="row">
          <div class="col-sm-12 col-lg-3 mb-4">
            <div class="card y-card">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col">
                    <div class="wrapper">
                      <div class="counter">
                        {{ $store.state.yclass.myClass.length }}
                      </div>
                      <div class="icon-rounded icon-blue">
                        <svg width="1366" height="69" viewBox="0 0 1366 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="682.5" cy="3409" rx="3409.5" ry="3409" fill="white"/>
</svg>

                      </div>
                    </div>
                    <div class="title">
                      <span>Kelas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3 mb-4">
            <div class="card y-card">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col">
                    <div class="wrapper">
                      <div class="counter">
                        {{$store.state.counter.question}}
                      </div>
                      <div class="icon-rounded icon-orange">
                        <i class="fas fa-calendar fa-2x"></i>
                      </div>
                    </div>
                    <div class="title">
                      <span>Soal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3 mb-4">
            <div class="card y-card">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col">
                    <div class="wrapper">
                      <div class="counter">
                        {{$store.state.counter.theory}}
                      </div>
                      <div class="icon-rounded icon-orange">
                        <i class="fas fa-calendar fa-2x"></i>
                      </div>
                    </div>
                    <div class="title">
                      <span>Materi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3 mb-4">
            <div class="card y-card">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col">
                    <div class="wrapper">
                      <div class="card-title">
                        ....
                      </div>
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
      // return this.$store.getters[this.Xyclass.g[2]]
    }
  },

  methods: {
    //
  },

  mounted() {
    this.$store.dispatch('questionCount')
    this.$store.dispatch('theoryCount')
  },

  data() {
    return {
      //
    }
  },

  components: {
    MyClass: require('./_components/MyClassDashboard').default,
    LogClass: require('./_components/LogClassDashboard').default,
  }
}
</script>
