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
                          <td>Agama</td>
                          <td>
                            <h3><span class="badge badge-success">Aktif</span></h3>
                          </td>
                        </tr>
                        <tr>
                          <td class="name">XII-Bahasa Inggris</td>
                          <td>Bahasa</td>
                          <td>
                            <h3><span class="badge badge-success">Aktif</span></h3>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- <div class="row mt-5">
                    <div class="col-md-6 align-self-center">
                      <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                    </div>
                    <div class="col-md-6">
                      <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                        <ul class="pagination">
                          <li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                          <li class="page-item active"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                        </ul>
                      </nav>
                    </div>
                  </div> -->
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
