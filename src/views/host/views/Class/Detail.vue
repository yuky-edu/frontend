<template>
<div id="class-detail">
  <div class="y-body">
    <div class="container-fluid">

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{name: 'Dashboard'}">Dashboard</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{name: 'ClassList'}">Daftar Kelas</router-link>
        </li>
        <li class="breadcrumb-item active">Detail Kelas</li>
      </ol>

      <div class="row">
        <div class="col-12">
          <div class="main-title">
            <h1>XII - Fisika Kuantum <i class="fa fa-pen edit-icon"></i></h1>
          </div>
        </div>
        <div class="col-sm-8">
            <div class="right d-flex">
              <div class="col-6">
                <div class="dropdown y-dropdown">

                  <button class="btn dropdown-toggle" type="button" id="y-category" data-toggle="dropdown">
                    <i class="fa fa-user"></i>
                    <span>Sains</span>
                  </button>

                  <div class="dropdown-menu" aria-labelledby="y-category">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>

                </div>
              </div>
              <div class="col-6">
                <h1>qwerty <i class="fa fa-pen edit-icon"></i></h1>
              </div>
            </div>
        </div>
        <div class="col-sm-3 text-right">
          <button class="btn btn-blue">
            <span>Tambah Jawaban</span>
            <i class="fa fa-plus ml-2"></i>
          </button>
        </div>
      </div>

      <QuestionCard />
      <QuestionCard />
      <QuestionCard />

      <div class="row">
        <div class="col-11">
          <div class="action-bottom text-center">
            <button class="btn btn-blue">
              <span>Tambah Soal</span>
              <i class="fa fa-plus ml-2"></i>
            </button>
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
    yClass: function() {
      const data = this.$store.getters[this.Xyclass.g[1]] // data
      return data
    }
  },

  methods: {
    //
  },

  mounted() {
    this.$store.dispatch(this.Xyclass.a[2]) // getDataClass_
  },

  data() {
    return {
      //
    }
  },

  components: {
    QuestionCard: require('./components/QuestionCard').default
  }
}
</script>
