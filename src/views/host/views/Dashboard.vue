<template>
<div id="dashboard">
  <Navbar></Navbar>
  <div class="y-banner">
    <img src="/assets/img/banner.png" alt="">
  </div>

  <div class="y-body">
    <div class="container">

      <div class="y-analytic mb-3">
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

      <div class="y-wrapper">
        <div class="row">
          <div class="col-sm-9">
            <div class="y-class">
              <div class="card y-card">
                <div class="card-header d-center-b">
                  <h6 class="m-0">Kelas Saya</h6>
                  <div class="no-arrow">
                    <button class="btn btn-purple">
                      <span>Buat Kelas </span>
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div class="card-body pt-0">
                  <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                    <table class="table my-0 table-hover y-table" id="dataTable">
                      <thead>
                        <tr>
                          <th>Nama Kelas</th>
                          <th>Kategori</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="name">XII-Agama Islam</td>
                          <td>
                            <i class="fa fa-user"></i>
                            <span> Agama</span>
                          </td>
                          <td>
                            <div class="badge badge-green size-2x">
                              <i class="far fa-clock"></i>
                              <span>Aktif</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="name">XII-Bahasa Inggris</td>
                          <td>
                            <i class="fa fa-user"></i>
                            <span> Bahasa</span>
                          </td>
                          <td>
                            <div class="badge badge-orange size-2x">
                              <i class="far fa-times-circle"></i>
                              <span>Non-Aktif</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="row">
                    <div class="col-md-6 offset-6">
                      <div class="d-lg-flex justify-content-lg-end">
                        <ul class="pagination m-0">
                          <li class="page-item disabled">
                            <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">« Sebelumnya</span>
                            </a>
                          </li>
                          <li class="page-item active"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">Selanjutnya »</span>
                          </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="y-simple-log">
              <div class="y-class">
                <div class="card y-card">
                  <div class="card-header d-center-b">
                    <h6 class="m-0">Log Aktivitas</h6>
                  </div>
                  <div class="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, impedit!</p>
                    <h1>Sabar..</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <p>© 2021 Yuky - ARNAV Developer. All rights reserved.</p>
  </footer>

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
