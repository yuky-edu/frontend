<template>
<div class="modal fade y-modal" id="make-class-code">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <form @submit.prevent="createClass()">
          <div class="row">
            <div class="col-12">
              <div class="form-group y-form">
                <input autocomplete="off" v-model="input.title" ref="title" type="text" class="form-control form-control-lg title" placeholder="Nama Kelas" name="class-name">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group y-form">
                <input autocomplete="off" v-model="input.description" ref="description" type="text" class="form-control form-control-lg title" placeholder="Deskripsi" name="class-name">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group y-form">
                <input v-model="input.code" ref="code" type="text" class="form-control form-control-lg" placeholder="Kode Kelas" name="class-name">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group y-form">
                <select v-model="input.category" class="form-control form-control-lg" :disabled="isInputed">
                  <option v-for="(item, index) in categories" :value="item.id">{{ item.name }}</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <button :disabled="isInputed" type="submit" class="btn btn-block y-btn-lg btn-warning mb-4 mt-3">
                <span class="text-bold bold-24">
                  <span v-if="isInputed">Sedang Membuat Kelas...</span>
                  <span v-else>Buat Kelas</span>
                </span>
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
        category: 0,
      }
    }
  },
}
</script>
