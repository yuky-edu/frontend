<template>
<div id="class-list">

  <div class="main-title d-center-b">
    <h1>
      Kelas Saya
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7044 3.51898C10.034 3.51898 9.46373 3.9848 9.30365 4.61265H14.6863C14.5263 3.9848 13.956 3.51898 13.2856 3.51898H10.7044ZM16.2071 4.61264H18.1881C20.2891 4.61264 22 6.34428 22 8.47085C22 8.47085 21.94 9.3711 21.92 10.6248C21.918 10.724 21.8699 10.8212 21.7909 10.88C21.3097 11.2354 20.8694 11.5291 20.8294 11.5493C19.1686 12.6632 17.2386 13.447 15.1826 13.8369C15.0485 13.8632 14.9165 13.7934 14.8484 13.6739C14.2721 12.6754 13.1956 12.0253 11.995 12.0253C10.8024 12.0253 9.71586 12.6683 9.12256 13.6678C9.05353 13.7853 8.92346 13.8531 8.7904 13.8278C6.75138 13.4369 4.82141 12.6541 3.17059 11.5594L2.21011 10.8911C2.13007 10.8405 2.08004 10.7493 2.08004 10.6481C2.05003 10.1316 2 8.47085 2 8.47085C2 6.34428 3.71086 4.61264 5.81191 4.61264H7.78289C7.97299 3.1443 9.2036 2 10.7044 2H13.2856C14.7864 2 16.017 3.1443 16.2071 4.61264ZM21.6598 12.8152L21.6198 12.8355C19.5988 14.1924 17.1676 15.0937 14.6163 15.4684C14.2561 15.519 13.8959 15.2861 13.7959 14.9216C13.5758 14.0912 12.8654 13.5443 12.015 13.5443H12.005H11.985C11.1346 13.5443 10.4242 14.0912 10.2041 14.9216C10.1041 15.2861 9.74387 15.519 9.38369 15.4684C6.83242 15.0937 4.4012 14.1924 2.38019 12.8355C2.37019 12.8254 2.27014 12.7646 2.1901 12.8152C2.10005 12.8659 2.10005 12.9874 2.10005 12.9874L2.17009 18.1519C2.17009 20.2785 3.87094 22 5.97199 22H18.018C20.1191 22 21.8199 20.2785 21.8199 18.1519L21.9 12.9874C21.9 12.9874 21.9 12.8659 21.8099 12.8152C21.7599 12.7849 21.6999 12.795 21.6598 12.8152ZM12.7454 17.0583C12.7454 17.4836 12.4152 17.8177 11.995 17.8177C11.5848 17.8177 11.2446 17.4836 11.2446 17.0583V15.7519C11.2446 15.3367 11.5848 14.9924 11.995 14.9924C12.4152 14.9924 12.7454 15.3367 12.7454 15.7519V17.0583Z" fill="#0e0e0e"/>
      </svg>
    </h1>
    <button @click="modalAddClass('#make-class-code')" class="btn btn-blue btn-xl br-10 shadow waves-effect waves-light">
      <span>Buat Kelas</span>
      <i class="ml-2 fa fa-plus"></i>
    </button>
  </div>

  <div class="y-class mt-4">
    <div class="card y-card">
      <div class="card-body pt-0">
        <div class="table-responsive">
          <table class="table my-0 table-hover y-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama Kelas</th>
                <th>Kategori</th>
                <th>Kode Kelas</th>
                <th>Entitas</th>
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
                  <span><img :src="item.category.image" :alt="item.category.name" width="25"> {{ item.category.name }}</span>
                </td>
                <td>{{ item.code }}</td>
                <td>{{ item.entities_count }}</td>
                <td>
                  <span v-if="item.last_session !== null">{{ moment(item.last_session.created_at).format('DD MMMM YYYY HH:mm') }}</span>
                  <span v-else>-</span>
                </td>
                <td class="text-right">

                  <div class="btn-group mr-2">
                    <button class="btn br-5 btn-warning dropdown-toggle dropdown-toggle-split text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                      <router-link class="btn dropdown-item" :to="{name: 'ClassDetail', params: {code: item.code}}">
                        <i class="fas fa-pen mr-2"></i>
                        <span>Detail</span>
                      </router-link>
                      <a class="btn dropdown-item text-danger" @click="deleteClass(item.id)">
                        <i class="fa fa-trash mr-2"></i>
                        <span>Hapus</span>
                      </a>
                    </div>
                  </div>

                  <button @click="createSession(item, index)" ref="btnPlay" class="btn y-btn y-btn-icon-right btn-green waves-effect waves-light">
                    <span>Mainkan</span>
                    <span class="icon">
                      <i class="fas fa-chevron-right"></i>
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

  mounted() {},

  data() {
    return {
      //
    }
  },

  components: {
    ModalAddClass: require('../_components/ModalAddClass').default
  }
}
</script>
