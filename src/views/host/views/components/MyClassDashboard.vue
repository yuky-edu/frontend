<template>
<div class="y-class">
  <div class="card y-card">
    <div class="card-header d-center-b">
      <h6 class="m-0">Kelas Saya</h6>
      <div class="no-arrow">
        <button class="btn btn-purple" data-toggle="modal" data-target="#exampleModal">
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
                <button class="btn btn-green btn-right-icon">
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
  <div class="modal fade y-modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <form @submit.prevent="addClass()">
            <div class="row">
              <div class="col-12">
                <div class="form-group y-form">
                  <input ref="name" type="text" class="form-control form-control-lg" placeholder="Nama Kelas" name="class-name">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group y-form">
                  <input ref="kode" type="text" class="form-control form-control-lg" placeholder="Kode Kelas" name="class-name" disabled>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group y-form">
                  <input ref="kode" type="text" class="form-control form-control-lg" placeholder="Kode Kelas" name="class-name" disabled>
                </div>
              </div>
              <button type="submit" class="btn btn-block y-btn-lg btn-purple mb-4 mt-3">
                <span>Masuk</span>
              </button>
              <button type="submit" class="btn btn-block y-btn-lg btn-purple mb-4 mt-3">
                <span>Masuk</span>
              </button>
            </div>
          </form>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
      return this.$store.getters[this.Xyclass.g[1]]
    }
  },

  methods: {
    getDataClass: function() {
      this.axios.get(this.API_URL + '/hosts/yclass/myclass')
        .then(({
          data
        }) => {
          if (data.status) {
            this.$store.commit(this.Xyclass.m. [1], data.data)
          }
        })
    },

    addClass: function() {
      window.console.log('add class')
    }
  },

  mounted() {
    this.getDataClass()
  },

  data() {
    return {
      nn: [{
          name: '123123'
        },
        {
          name: 'asdfasdf'
        },
      ]
    }
  },
}
</script>
