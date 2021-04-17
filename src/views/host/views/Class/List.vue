<template>
<div id="class-list">

  <div class="main-title d-center-b">
    <h1>Daftar Kelas <i class="fa fa-user"></i></h1>
    <button @click="modalAddClass('#make-class-code')" class="btn btn-blue btn-xl shadow waves-effect waves-light">
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
                <td>{{ index+1 }}.</td>
                <td>{{ item.title }}</td>
                <td>
                  <i class="fa fa-user mr-2"></i>
                  <span>{{ item.yclass_category.name }}</span>
                </td>
                <td>{{ item.code }}</td>
                <td>{{ item.questions_count }}</td>
                <td>
                  <span v-if="item.last_session !== null">{{ moment(item.last_session.created_at).format('DD MMMM YYYY HH:mm') }}</span>
                  <span v-else>-</span>
                </td>
                <td class="text-right">

                  <div class="btn-group mr-2">
                    <button class="btn br-5 btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                      <router-link class="dropdown-item" :to="{name: 'Class', query: {id: item.id}}">
                        <i class="fas fa-pen mr-2"></i>
                        <span>Detail</span>
                      </router-link>
                      <a class="dropdown-item text-danger" @click="deleteClass(item.id)">
                        <i class="fa fa-trash mr-2"></i>
                        <span>Hapus</span>
                      </a>
                    </div>
                  </div>

                  <a class="btn br-5 btn-green btn-right-icon waves-effect waves-light">
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
    <ModalAddClass />

  </div>

</div>
</template>

<script>
/*
  deleteClass(id) -> hapus kelas. param: id adalah id kelas
*/
export default {

  computed: {
    yClass: function() {
      return this.$store.state.yclass.myClass
    }
  },

  methods: {
    modalAddClass: function(id) {
      this.$store.dispatch('yclass/generateCode')
      $(id).modal()
    },
    deleteClass(id) {
      this.$store.dispatch('yclass/deleteClass', id)
    }
  },

  mounted() {},

  data() {
    return {
      //
    }
  },

  components: {
    ModalAddClass: require('../components/ModalAddClass').default
  }
}
</script>
