<template>
<div class="y-class">
  <div class="card y-card">
    <div class="card-header d-center-b">
      <h6 class="m-0">Kelas Saya</h6>
      <div class="no-arrow">
        <button class="btn btn-purple">
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
            <tr>
              <td class="text-bold bold-16 class-name">XII-Agama Islam</td>
              <td class="text-regular text-16">
                <i class="fa fa-user"></i>
                <span> Agama</span>
              </td>
              <td class="text-right">
                <button class="btn btn-green btn-right-icon">
                  <span>Mainkan</span>
                  <i class="fas fa-chevron-right"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td class="text-bold bold-16 class-name">XII-Bahasa Inggris</td>
              <td class="text-regular text-16">
                <i class="fa fa-user"></i>
                <span> Bahasa</span>
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
</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    //
  },

  mounted() {
    //
  },

  data() {
    return {
      //
    }
  },
}
</script>
