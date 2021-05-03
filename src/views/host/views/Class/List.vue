<template>
<div id="class-list">

  <div class="main-title d-center-b">
    <h1>
      Kelas Saya

<svg width="32" height="32" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.99634 12.5075V10.6047" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6425 3.99756C14.91 3.99756 15.93 5.02506 15.93 6.29256V8.87256C14.085 9.95256 11.6475 10.6051 8.9925 10.6051C6.3375 10.6051 3.9075 9.95256 2.0625 8.87256V6.28506C2.0625 5.01756 3.09 3.99756 4.3575 3.99756H13.6425Z" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6213 3.99426V3.71976C11.6213 2.80476 10.8788 2.06226 9.96384 2.06226H8.02884C7.11384 2.06226 6.37134 2.80476 6.37134 3.71976V3.99426" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.08081 11.6121L2.22256 13.4938C2.31856 14.7621 3.37531 15.7423 4.64656 15.7423H13.3458C14.6171 15.7423 15.6738 14.7621 15.7698 13.4938L15.9116 11.6121" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
                <th>Slide</th>
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
                  <span><img :src="item.category.imageurl" :alt="item.category.name" width="25"> {{ item.category.name }}</span>
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
