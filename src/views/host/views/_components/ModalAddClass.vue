<template>
<div class="modal fade" id="make-class-code">
  <div class="modal-dialog y-modal modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <div class="float-right">
          <button type="button" class="btn btn-danger shadow waves-effect waves-light" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="createClass()">
          <div class="row">
            <div class="col-12">
              <div class="form-group y-form">
                Nama Kelas
                <input required autocomplete="off" v-model="input.title" ref="title" type="text" class="form-control form-control-lg" placeholder="Masukan Nama Kelas" name="class-name">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group y-form">
                Deskripsi
                <input required autocomplete="off" v-model="input.description" ref="description" type="text" class="form-control form-control-lg" placeholder="Masukan Deskripsi" name="class-name">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group y-form">
                Kode Kelas
                <input required v-model="input.code" ref="code" type="text" class="form-control form-control-lg" placeholder="Kode Kelas" name="class-name">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group y-form">
                Kategori
                <select required v-model="input.category" class="form-control form-control-lg">
                  <option v-for="(item, index) in categories" :value="item.id">{{ item.name }}</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <button :disabled="isInputed" type="submit" class="btn btn-block shadow waves-effect waves-light y-btn-lg btn-blue mb-4 mt-3">
                <span class="text-bold bold-24">
                  <span v-if="isInputed">Sedang Membuat Kelas...</span>
                  <span v-else>Buat Kelas <i class="fa fa-plus"></i></span>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  computed: {
    categories: function(){
      return this.$store.state.yclass.categories
    },
    code: function(){
      return this.$store.state.yclass.create.code
    }
  },

  watch: {
    '$store.state.yclass.create.code': function() {
      this.input.code = this.$store.state.yclass.create.code
    }
  },

  methods: {
    async createClass() {
      this.isInputed = true
      await this.$store.dispatch('yclass/addClass', this.input)
      this.isInputed = false
      $("#make-class-code").modal("hide")
    }
  },

  mounted() {

  },

  data() {
    return {
      isInputed: false,
      input: {
        title: 'Kelas Tanpa Nama',
        code: '',
        description: '',
        category: 1,
      }
    }
  },
}
</script>
