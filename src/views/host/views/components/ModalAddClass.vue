<template>
<div class="modal fade y-modal" id="make-class-code" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <input ref="kode" type="text" class="form-control form-control-lg" placeholder="Kode Kelas" name="class-name">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group y-form">
                <select class="form-control form-control-lg">
                  <option>Lainnya</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-block y-btn-lg btn-warning mb-4 mt-3">
                <span class="text-bold bold-24">Buat Kelas</span>
              </button>
            </div>
          </div>
        </form>
        <div class="w-100 text-center">
          <button type="button" class="btn" data-dismiss="modal">Tutup</button>
        </div>
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
    generateClassCode: function()
    {
      window.console.log('Code kelas')
    }
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
