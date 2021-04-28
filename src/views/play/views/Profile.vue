<template>
<div id="joined">

  <div class="header">
    <a class="btn y-btn btn-outline-light btn-xs" href="/play">
      <i class="fa fa-arrow-left mr-2"></i>
      <span>Kembali</span>
    </a>
  </div>

  <div class="body">
    <div class="text-center text-white mt-5 mb-4">
      <p>Anda Akan Bergabung Ke Kelas 🏆</p>
      <h2 class="m-0">{{yclass.title}}</h2>
      <div><i class="fa fa-info-circle"></i> {{yclass.description}}</div>
    </div>
    <div class="row wrapper">
      <div class="col flex-center">
        <label for="file">
          <span class="btn y-btn-icon btn-sm btn-outline-light">
            <i class="fa fa-picture-o"></i>
          </span>
        </label>
        <input @change="previewAvatar" hidden id="file" type="file" accept="image/*">
      </div>
      <div class="col flex-center">
        <div class="avatar-circle">
          <img
            :src="data.avatar.imageBlob ? data.avatar.imageBlob : '/avatar/'+data.avatar.image"
          alt="avatar">
        </div>
      </div>
      <div class="col flex-center">
        <label for="camera">
          <span class="btn y-btn-icon btn-sm btn-outline-light">
            <i class="fa fa-camera"></i>
          </span>
          <input @change="previewAvatar" hidden id="camera" type="file" capture="camera" accept="image/*">
        </label>
      </div>
    </div>

    <form @submit.prevent="register()">
      <div class="form-group y-form">
        <input required autocomplete="off" v-model="data.name" ref="kode" type="text" class="form-control form-control-sm play-form" placeholder="Masukan Nama Kamu" name="class-code">
      </div>
      <div class="w-100 text-center mt-5">
        <button class="btn btn-warning btn-sm btn-play" name="button">
          <span>Lanjutkan</span>
          <i class="fa fa-arrow-right ml-2"></i>
        </button>
      </div>
    </form>

  </div>

</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    randomAvatar() {
      const arr = [1, 2, 3, 4, 5]
      const rand = arr[Math.floor(Math.random() * arr.length)]
      this.data.avatar.image = 'avatar' + rand + '.png'
    },

    register() {
      const data = this.data
      let tokenName = this.TOKEN
      data.id_session = this.$cookies.get('player_session').id_session,
      this.$store.dispatch('player/register', data).then(response => {
        this.$cookies.set(tokenName, response.token)
        this.socket.emit('register', response)
      }).then(() => {
        this.$router.push({
          name: 'LayoutToken',
          params: {
            code: this.$route.params.code
          }
        })
      })
    },

    getYclass() {
      this.axios.get(this.API_URL + '/plays/yclass/code/' + this.$route.params.code).then(res => {
        if (res.data.status) this.yclass = res.data.data
      })
    },

    previewAvatar(e) {
      this.data.avatar.type = "custom"
      this.data.avatar.image = e.target.files[0]
      this.data.avatar.imageBlob = URL.createObjectURL(this.data.avatar.image)
    }
  },

  mounted() {
    this.getYclass()
    this.randomAvatar()
  },

  data() {
    return {
      data: {
        name: 'Muhammad Tegar Santosaputra',
        avatar: {
          type: 'default',
          imageBlob: '',
          image: 'avatar1.png'
        }
      },
      yclass: ''
    }
  },
}
</script>
