<template>
<div id="joined">

  <div class="header">
    <a class="btn y-btn btn-outline-light btn-xs" href="/play">
      <i class="fa fa-arrow-left mr-2"></i>
      <span>Kembali</span>
    </a>
  </div>

  <form @submit.prevent="register()">

    <div class="body play-container">
      <div class="text-center text-white mt-5 mb-4">
        <p>Kamu akan bergabung ke kelas 🏆</p>
        <h2 class="class-title">{{yclass.title}}</h2>
      </div>
      <div class="row wrapper">
        <div class="col flex-center">
          <label for="file">
            <span class="btn y-btn-icon btn-sm btn-outline-light">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M16.3028 2.7498H7.65076C4.63876 2.7498 2.74976 4.8838 2.74976 7.9038V16.0498C2.74976 19.0698 4.63076 21.2038 7.65076 21.2038H16.2978C19.3228 21.2038 21.2028 19.0698 21.2028 16.0498V7.9038C21.2068 4.8838 19.3258 2.7498 16.3028 2.7498Z"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.7031 8.785C10.7031 9.805 9.87711 10.631 8.85711 10.631C7.83811 10.631 7.01111 9.805 7.01111 8.785C7.01111 7.765 7.83811 6.939 8.85711 6.939C9.87611 6.94 10.7021 7.766 10.7031 8.785Z" stroke="white" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.207 14.951C20.284 14.001 18.509 12.082 16.579 12.082C14.648 12.082 13.535 16.315 11.678 16.315C9.821 16.315 8.134 14.401 6.646 15.628C5.158 16.854 3.75 19.361 3.75 19.361" stroke="white" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </label>
          <input @change="previewAvatar" hidden id="file" type="file" accept="image/*">
        </div>
        <div class="col flex-center">
          <div class="avatar-circle">
            <img :src="data.avatar.imageBlob ? data.avatar.imageBlob : '/avatar/'+data.avatar.image" alt="avatar">
          </div>
        </div>
        <div class="col flex-center">
          <label for="camera">
            <span type="button" class="btn y-btn-icon btn-sm btn-outline-light">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.0402 4.0513C16.0502 4.4533 16.3592 5.8533 16.7722 6.3033C17.1852 6.7533 17.7762 6.9063 18.1032 6.9063C19.8412 6.9063 21.2502 8.3153 21.2502 10.0523V15.8473C21.2502 18.1773 19.3602 20.0673 17.0302 20.0673H6.97024C4.63924 20.0673 2.75024 18.1773 2.75024 15.8473V10.0523C2.75024 8.3153 4.15924 6.9063 5.89724 6.9063C6.22324 6.9063 6.81424 6.7533 7.22824 6.3033C7.64124 5.8533 7.94924 4.4533 8.95924 4.0513C9.97024 3.6493 14.0302 3.6493 15.0402 4.0513Z"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.4955 9.5H17.5045" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.1789 13.128C15.1789 11.372 13.7559 9.94901 11.9999 9.94901C10.2439 9.94901 8.82092 11.372 8.82092 13.128C8.82092 14.884 10.2439 16.307 11.9999 16.307C13.7559 16.307 15.1789 14.884 15.1789 13.128Z" stroke="white"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <input @change="previewAvatar" hidden id="camera" type="file" capture="camera" accept="image/*">
          </label>
        </div>
      </div>

      <div class="form-group y-form">
        <label for="#join" class="text-white">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12.2506 2.06256H5.74887C3.48312 2.06256 2.06262 3.66681 2.06262 5.93706V12.0631C2.06262 14.3333 3.47637 15.9376 5.74887 15.9376H12.2499C14.5231 15.9376 15.9376 14.3333 15.9376 12.0631V5.93706C15.9376 3.66681 14.5231 2.06256 12.2506 2.06256Z"
              stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8.01689 9.00005C8.01689 9.7673 7.39514 10.3891 6.62789 10.3891C5.86064 10.3891 5.23889 9.7673 5.23889 9.00005C5.23889 8.2328 5.86064 7.61105 6.62789 7.61105H6.63014C7.39589 7.6118 8.01689 8.23355 8.01689 9.00005Z" stroke="white"
              stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.01904 9.00006H12.7575V10.3891" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.6364 10.3891V9.00014" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span class="ml-1">Nama Kamu</span>
        </label>
        <input required autocomplete="off" v-model="data.name" ref="kode" type="text" class="form-control form-control-sm play-form" placeholder="Masukan Nama Kamu" name="class-code">
      </div>

      <div class="w-100 text-center mt-5">
        <button ref="btnNext" class="btn btn-warning-gradient btn-sm" name="button">
          <span>Lanjutkan</span>
          <i class="fa fa-arrow-right ml-2"></i>
        </button>
      </div>

    </div>

  </form>

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
      this.$refs.btnNext.disabled = true
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
