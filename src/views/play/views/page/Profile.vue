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
      <h2>US-AGAMA ISLAM</h2>
    </div>
    <div class="row wrapper">
      <div class="col flex-center">
        <button class="btn y-btn-icon btn-sm btn-outline-light">
          <i class="fa fa-youtube"></i>
        </button>
      </div>
      <div class="col flex-center">
        <div class="avatar-circle">
          <img :src="data.avatar.image" alt="avatar">
        </div>
      </div>
      <div class="col flex-center">
        <button class="btn y-btn-icon btn-sm btn-outline-light">
          <i class="fa fa-youtube"></i>
        </button>
      </div>
    </div>

    <form @submit.prevent="register()">
      <div class="form-group y-form">
        <input v-model="data.name" ref="kode" type="text" class="form-control form-control-sm play-form" placeholder="Masukan Nama Kamu" name="class-code">
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
      data.id_session = this.$cookies.get('player_session').id_session,
      this.$store.dispatch('player/register', data)
    }
  },

  mounted() {
    this.randomAvatar()
  },

  data() {
    return {
      data: {
        name: '',
        avatar: {
          type: 'default',
          image: 'avatar1.png'
        }
      }
    }
  },
}
</script>
