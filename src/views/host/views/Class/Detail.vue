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
            <div class="col-6 pl-0">
              <div class="dropdown y-dropdown">

                <button class="btn dropdown-toggle" type="button" id="y-category" data-toggle="dropdown">
                  <div class="left">
                    <i class="fa fa-user"></i>
                    <span>Sains</span>
                  </div>
                </button>

                <div class="dropdown-menu" aria-labelledby="y-category">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>

              </div>
            </div>
            <div class="col-6 pr-0">
              <div class="form-group y-form">
                <input value="QWERTY" type="text" class="form-control form-control-md" placeholder="Kode Kelas">
              </div>
            </div>
          </div>
          <div class="form-group y-form mt-3">
            <textarea class="form-control" rows="3" placeholder="Ketik Deskripsi Kelas Disini..."></textarea>
          </div>
        </div>
        <div class="col-sm-3 text-right">
          <button class="btn btn-green btn-lg">
            <span>Mainkan</span>
            <!-- <i class="fa fa-plus ml-2"></i> -->
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
    yClass: function() {}
  },

  methods: {
    //
  },

  mounted() {},

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
