<template>
<div class="y-class">
  <div class="card y-card">
    <div class="card-header d-center-b">
      <h6 class="m-0">Kelas Saya</h6>
      <div class="no-arrow">
        <button @click="modalAddClass('#make-class-code')" class="btn btn-purple waves-effect waves-light">
          <span>Buat Kelas </span>
          <i class="ml-1 fa fa-plus"></i>
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
              <th></th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="(item, index) in yClass">
              <td class="text-bold bold-16">{{ item.title }}</td>
              <td class="text-regular text-16">
                <i class="fa fa-user mr-2"></i>
                <span>{{ item.yclass_category.name }}</span>
              </td>
              <td class="text-right">
                <button class="btn btn-green btn-right-icon waves-effect waves-light">
                  <span>Mainkan</span>
                  <i class="fas fa-chevron-right"></i>
                </button>
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
  <ModalAddClass/>

</div>
</template>

<script>
export default {

  computed: {
    yClass: function() {
      return this.$store.getters[this.Xyclass.g[1]] // data
    }
  },

  methods: {
    modalAddClass: function(id) { // Open modal
      console.log('Open modal')
      $(id).modal()
      this.$store.dispatch(this.Xyclass.a[0]) // generateCode_
    }
  },

  mounted() {
    this.$store.dispatch(this.Xyclass.a[1]) // getClassCategories_
    this.$store.dispatch(this.Xyclass.a[2]) // getDataClass_
  },

  data() {
    return {
      //
    }
  },

  components: {
    ModalAddClass: require('./ModalAddClass').default
  }
}
</script>
