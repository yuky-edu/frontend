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
                      <div class="counter">
                        {{ $store.state.yclass.myClass.length }}
                      </div>
                      <div class="icon-rounded icon-blue">
                        
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7044 3.51898C10.034 3.51898 9.46373 3.9848 9.30365 4.61265H14.6863C14.5263 3.9848 13.956 3.51898 13.2856 3.51898H10.7044ZM16.2071 4.61264H18.1881C20.2891 4.61264 22 6.34428 22 8.47085C22 8.47085 21.94 9.3711 21.92 10.6248C21.918 10.724 21.8699 10.8212 21.7909 10.88C21.3097 11.2354 20.8694 11.5291 20.8294 11.5493C19.1686 12.6632 17.2386 13.447 15.1826 13.8369C15.0485 13.8632 14.9165 13.7934 14.8484 13.6739C14.2721 12.6754 13.1956 12.0253 11.995 12.0253C10.8024 12.0253 9.71586 12.6683 9.12256 13.6678C9.05353 13.7853 8.92346 13.8531 8.7904 13.8278C6.75138 13.4369 4.82141 12.6541 3.17059 11.5594L2.21011 10.8911C2.13007 10.8405 2.08004 10.7493 2.08004 10.6481C2.05003 10.1316 2 8.47085 2 8.47085C2 6.34428 3.71086 4.61264 5.81191 4.61264H7.78289C7.97299 3.1443 9.2036 2 10.7044 2H13.2856C14.7864 2 16.017 3.1443 16.2071 4.61264ZM21.6598 12.8152L21.6198 12.8355C19.5988 14.1924 17.1676 15.0937 14.6163 15.4684C14.2561 15.519 13.8959 15.2861 13.7959 14.9216C13.5758 14.0912 12.8654 13.5443 12.015 13.5443H12.005H11.985C11.1346 13.5443 10.4242 14.0912 10.2041 14.9216C10.1041 15.2861 9.74387 15.519 9.38369 15.4684C6.83242 15.0937 4.4012 14.1924 2.38019 12.8355C2.37019 12.8254 2.27014 12.7646 2.1901 12.8152C2.10005 12.8659 2.10005 12.9874 2.10005 12.9874L2.17009 18.1519C2.17009 20.2785 3.87094 22 5.97199 22H18.018C20.1191 22 21.8199 20.2785 21.8199 18.1519L21.9 12.9874C21.9 12.9874 21.9 12.8659 21.8099 12.8152C21.7599 12.7849 21.6999 12.795 21.6598 12.8152ZM12.7454 17.0583C12.7454 17.4836 12.4152 17.8177 11.995 17.8177C11.5848 17.8177 11.2446 17.4836 11.2446 17.0583V15.7519C11.2446 15.3367 11.5848 14.9924 11.995 14.9924C12.4152 14.9924 12.7454 15.3367 12.7454 15.7519V17.0583Z" fill="blue"/>
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
          <div class="col-sm-12 col-lg-4 mb-4">
            <div class="card y-card">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col">
                    <div class="wrapper">
                      <div class="counter">
                        {{$store.state.counter.question}}
                      </div>
                      <div class="icon-rounded icon-orange">
                        
<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.405 1.5H5.94C6.9975 1.5 7.845 2.3625 7.845 3.42075V5.9775C7.845 7.0425 6.9975 7.8975 5.94 7.8975H3.405C2.355 7.8975 1.5 7.0425 1.5 5.9775V3.42075C1.5 2.3625 2.355 1.5 3.405 1.5ZM3.405 10.1023H5.94C6.9975 10.1023 7.845 10.958 7.845 12.023V14.5798C7.845 15.6373 6.9975 16.4998 5.94 16.4998H3.405C2.355 16.4998 1.5 15.6373 1.5 14.5798V12.023C1.5 10.958 2.355 10.1023 3.405 10.1023ZM14.5951 1.5H12.0601C11.0026 1.5 10.1551 2.3625 10.1551 3.42075V5.9775C10.1551 7.0425 11.0026 7.8975 12.0601 7.8975H14.5951C15.6451 7.8975 16.5001 7.0425 16.5001 5.9775V3.42075C16.5001 2.3625 15.6451 1.5 14.5951 1.5ZM12.0601 10.1023H14.5951C15.6451 10.1023 16.5001 10.958 16.5001 12.023V14.5798C16.5001 15.6373 15.6451 16.4998 14.5951 16.4998H12.0601C11.0026 16.4998 10.1551 15.6373 10.1551 14.5798V12.023C10.1551 10.958 11.0026 10.1023 12.0601 10.1023Z" fill="#FC622C"/>
</svg>


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
          <div class="col-sm-12 col-lg-4 mb-4">
            <div class="card y-card">
              <div class="card-body">
                <div class="row no-gutters">
                  <div class="col">
                    <div class="wrapper">
                      <div class="counter">
                        {{$store.state.counter.theory}}
                      </div>
                      <div class="icon-rounded icon-orange">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.92574 16.39H14.3119C14.7178 16.39 15.0545 16.05 15.0545 15.64C15.0545 15.23 14.7178 14.9 14.3119 14.9H8.92574C8.5198 14.9 8.18317 15.23 8.18317 15.64C8.18317 16.05 8.5198 16.39 8.92574 16.39ZM12.2723 9.9H8.92574C8.5198 9.9 8.18317 10.24 8.18317 10.65C8.18317 11.06 8.5198 11.39 8.92574 11.39H12.2723C12.6782 11.39 13.0149 11.06 13.0149 10.65C13.0149 10.24 12.6782 9.9 12.2723 9.9ZM19.3381 9.02561C19.5708 9.02292 19.8242 9.02 20.0545 9.02C20.302 9.02 20.5 9.22 20.5 9.47V17.51C20.5 19.99 18.5099 22 16.0545 22H8.17327C5.59901 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.5 2 7.96535 2H13.2525C13.5099 2 13.7079 2.21 13.7079 2.46V5.68C13.7079 7.51 15.203 9.01 17.0149 9.02C17.4381 9.02 17.8112 9.02316 18.1377 9.02593C18.3917 9.02809 18.6175 9.03 18.8168 9.03C18.9578 9.03 19.1405 9.02789 19.3381 9.02561ZM19.6111 7.566C18.7972 7.569 17.8378 7.566 17.1477 7.559C16.0527 7.559 15.1507 6.648 15.1507 5.542V2.906C15.1507 2.475 15.6685 2.261 15.9646 2.572C16.5004 3.13476 17.2368 3.90834 17.9699 4.67837C18.7009 5.44632 19.4286 6.21074 19.9507 6.759C20.2398 7.062 20.0279 7.565 19.6111 7.566Z" fill="#FC622C"/>
</svg>
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
