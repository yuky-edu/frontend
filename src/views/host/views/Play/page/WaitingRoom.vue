<template>
<div id="play-waiting">
  <div class="container-fluid">
    <div class="row">

      <div class="col">
        <div class="panel-list">
          <div class="main-title">
            Ayo Masuk ke Kelas Sekarang 🏆
          </div>
          <div class="row">

            <CardJoined v-for="(item, index) in players" :data="item" />

          </div>
        </div>
      </div>

      <div class="col-xl-3 col-md-4">
        <div class="panel-right">
          <div class="main-title">
            <span class="weight-normal">Total : </span>
            <span>{{ players.length }}</span>
          </div>
          <div class="card y-card card-class-info">
            <div class="card-body">
              <div class="class-info">
                <div class="class-title">
                  <span>{{ data.title }}</span>
                </div>
                <div class="class-more-info">
                  <div class="text-danger">kategori: {{ category.name }}</div>
                  <div class="text-danger">Kode: {{ data.code }}</div>
                </div>
              </div>

              <hr>

              <div class="class-desc">
                <p>{{ data.description }}</p>
              </div>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-body">
              <button class="btn btn-block btn-lg br-5 shadow btn-blue waves-effect waves-light mb-3">
                <span>Mulai Kelas</span>
              </button>
              <button class="btn btn-block btn-lg br-5 shadow btn-danger waves-effect waves-light">
                <span>Batalkan </span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {

  computed: {
    data: function() {
      return this.$store.state.yclass.playClass
    },

    category: ({
      data
    }) => {
      if (data.category) return data.category
      return {}
    },

    players: function() {
      const data = this.$store.state.player.players
      if(data) return data
      return []
    }
  },

  methods: {
    //
  },

  mounted() {

  },

  data() {
    return {
      //
    }
  },

  components: {
    CardJoined: require('./_components/CardJoined').default
  }
}
</script>
