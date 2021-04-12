<template>
<div class="modal fade y-modal" id="make-class-code">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <form @submit.prevent="$store.dispatch(Xyclass.a[3])">
          <div class="row">
            <div class="col-12">
              <div class="form-group y-form">
                <input v-model="newClass.name" ref="name" type="text" class="form-control form-control-lg" placeholder="Nama Kelas" name="class-name" :disabled="newClass.loading">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group y-form">
                <input v-model="newClass.code" ref="code" type="text" class="form-control form-control-lg" placeholder="Kode Kelas" name="class-name" disabled>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group y-form">
                <select v-model="newClass.category" class="form-control form-control-lg" :disabled="newClass.loading">
                  <option v-for="(item, index) in categories" :value="item.id">{{ item.name }}</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <button :disabled="newClass.loading" type="submit" class="btn btn-block y-btn-lg btn-warning mb-4 mt-3">
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
    newClass: function() {
      return this.$store.getters[this.Xyclass.g[3]]
    },

    categories: function(){
      return this.$store.getters[this.Xyclass.g[4]]
    }
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
