<template>
<div class="y-class">
  <div class="card y-card">
    <div class="card-header d-center-b">
      <div class="card-title">
        Kelas Saya
      </div>
      <div class="no-arrow">
        <button @click="modalAddClass('#make-class-code')" class="btn br-5 shadow btn-blue waves-effect waves-light">
          <span>Buat Kelas </span>
          <i class="ml-1 fa fa-plus"></i>
        </button>
      </div>
    </div>
    <div class="card-body pt-0">
      <div class="table-responsive">

        <table class="table my-0 table-hover <y-table></y-table>">
          <thead>
            <tr>
              <th>Nama Kelas</th>
              <th>Kategori</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in yClass">
              <td class="text-bold bold-16">
                <router-link :to="{ name: 'ClassDetail', params: {code: item.code} }">
                  {{ item.title }}
                </router-link>
              </td>
              <td class="text-regular text-16">
                <span>
                  <img :src="item.category.imageurl" :alt="item.category.name" width="25"> {{ item.category.name }}
                </span>
              </td>
              <td class="text-right">
                <button @click="createSession(item, index)" ref="btnPlay" class="btn y-btn y-btn-icon-right btn-green waves-effect waves-light">
                  <span>Mainkan</span>
                  <span class="icon">

<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.75 11.7256L4.75 11.7256" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </span>
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
          <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li> -->
          <li class="page-item disabled">
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
</template>

<script>
export default {

  computed: {
    yClass: function() {
      return this.$store.state.yclass.myClass
    }
  },

  methods: {
    modalAddClass: function(id) { // Open modal
      this.$store.dispatch('yclass/generateCode')
      $(id).modal()
    },

    createSession: function(data, index) {
      const btn = this.$refs.btnPlay[index]
      btn.setAttribute('disabled', true)
      this.$store.dispatch('yclass_session/createSession', {
        id_yclass: data.id
      }).then(response => {
        btn.removeAttribute('disabled')
        this.$cookies.set('play_session', {
          id: response.data.id,
          ws_channel: response.data.ws_channel
        }, '1d')
        this.$router.push({
          name: 'Play',
          params: {
            code: data.code
          }
        })
      })
    }
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
