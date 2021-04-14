<template>
<div id="class-list">
  <div class="y-body">
    <div class="container-fluid">

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li class="breadcrumb-item active">Daftar Kelas</li>
      </ol>

      <div class="main-title d-center-b">
        <h1>Daftar Kelas <i class="fa fa-user"></i></h1>
        <button class="btn btn-blue btn-xl shadow waves-effect waves-light">
          <span>Buat Kelas </span>
          <i class="ml-1 fa fa-plus"></i>
        </button>
      </div>

      <div class="y-class mt-4">
        <div class="card y-card">
          <div class="card-body pt-0">
            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
              <table class="table my-0 table-hover y-table" id="dataTable">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nama Kelas</th>
                    <th>Kategori</th>
                    <th>Kode Kelas</th>
                    <th>Soal</th>
                    <th>Terakhir Dimainkan</th>
                    <th>
                      <input type="text" placeholder="Cari Kelas...">
                    </th>
                  </tr>
                </thead>
                <tbody>

                  <tr v-for="(item, index) in yClass">
                    <td>1.</td>
                    <td>{{ item.title }}</td>
                    <td>
                      <i class="fa fa-user mr-2"></i>
                      <span>{{ item.yclass_category.name }}</span>
                    </td>
                    <td>{{ item.code }}</td>
                    <td>...</td>
                    <td>...</td>
                    <td class="text-right">
                      <router-link :to="{name: 'ClassDetail', params: {idClass: item.id}}" class="btn btn-warning btn-right-icon waves-effect waves-light text-white mr-2">
                        <span>Detail</span>
                        <i class="fas fa-chevron-right"></i>
                      </router-link>
                      <a class="btn btn-green btn-right-icon waves-effect waves-light">
                        <span>Mainkan</span>
                        <i class="fas fa-chevron-right"></i>
                      </a>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-lg-flex justify-content-lg-end">
              <ul class="pagination m-0">
                <li class="page-item disabled">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <!-- <ModalAddClass /> -->

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
      console.log(data)
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
    //
  }
}
</script>
