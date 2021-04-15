<template>
<div id="class-question">
  <div class="y-body">
    <div class="container-fluid">

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{name: 'Dashboard'}">Dashboard</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{name: 'ClassList'}">Daftar Kelas</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{name: 'ClassList'}">Detail Kelas</router-link>
        </li>
        <li class="breadcrumb-item active">Detail Soal</li>
      </ol>

      <div class="row">
        <div class="col-9">
          <div class="left-panel d-flex">
            <div class="q-number mr-3">
              <button class="btn btn-sm btn-gray waves-effect waves-light">1</button>
            </div>
            <div class="card card-question">
              <div class="card-body">

                <div class="question-form">
                  <div class="form-group y-form">
                    <textarea class="form-control" rows="3" placeholder="Ketik Soal Kamu Disini..."></textarea>
                  </div>
                </div>

                <div class="answer-list">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <div class="answer">
                        <button class="btn btn-md btn-outline-gray-2 selected">A</button>
                        <div class="form-group y-form">
                          <input type="text" class="form-control form-control-md" placeholder="Ketik Soal Kamu Disini...">
                        </div>
                        <div class="y-action">
                          <i class="fa fa-times"></i>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="answer">
                        <button class="btn btn-md btn-outline-gray-2">B</button>
                        <div class="form-group y-form">
                          <input type="text" class="form-control form-control-md" placeholder="Ketik Soal Kamu Disini...">
                        </div>
                        <div class="y-action">
                          <i class="fa fa-times"></i>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="answer">
                        <button class="btn btn-md btn-outline-gray-2">C</button>
                        <div class="form-group y-form">
                          <input type="text" class="form-control form-control-md" placeholder="Ketik Soal Kamu Disini...">
                        </div>
                        <div class="y-action">
                          <i class="fa fa-times"></i>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <div class="answer">
                        <button class="btn btn-md btn-outline-gray-2">D</button>
                        <div class="form-group y-form">
                          <input type="text" class="form-control form-control-md" placeholder="Ketik Soal Kamu Disini...">
                        </div>
                        <div class="y-action">
                          <i class="fa fa-times"></i>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="action-bottom text-center">
                  <button class="btn btn-blue">
                    <span>Tambah Jawaban</span>
                    <i class="fa fa-plus ml-2"></i>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="right-panel">
            <div class="card card-media">
              <div class="card-body">
                <div class="media-wrapper">
                  <div class="media-button">
                    <button class="btn btn-warning btn-lg btn-icon shadow waves-effect waves-light mb-3">
                      <i class="fa fa-pen"></i>
                    </button>
                    <button class="btn btn-aqua btn-lg btn-icon shadow waves-effect waves-light mb-3">
                      <i class="fa fa-eye"></i>
                    </button>
                    <button class="btn btn-danger btn-lg btn-icon shadow waves-effect waves-light">
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>
                  <div class="media-preview">
                    <span class="alt">Tidak Ada Media</span>
                  </div>
                </div>
                <div class="action-button">
                  <button class="btn btn-lg btn-blue btn-block mb-">
                    <span>Simpan Soal</span>
                  </button>
                  <button class="btn btn-lg btn-danger btn-block mb-">
                    <span>Batalkan</span>
                  </button>
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
export default {

  computed: {
    yClass: function() {
      // const data = this.$store.getters[this.Xyclass.g[1]] // data
      // return data
    }
  },

  methods: {
    //
  },

  mounted() {
    // this.$store.dispatch(this.Xyclass.a[2]) // getDataClass_
  },

  data() {
    return {
      //
    }
  },

  components: {
    // QuestionCard: require('./components/QuestionCard').default
  }
}
</script>
