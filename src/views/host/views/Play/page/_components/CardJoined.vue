<template>
<div class="col-md-6 col-lg-4 col-xl-3">
  <div class="card y-list-card">
    <div class="card-body">
      <div class="kick">
        <div @click="kickPlayer()" class="icon-red">×</div>
      </div>
      <div class="avatar-wrapper">
        <img class="rounded-circle img-fluid" :src="data.avatar" alt="Avatar">
      </div>
      <div class="joined-name">
        <span>{{ data.name }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    kickPlayer() {
      this.$store.dispatch('player/kickPlayer', this.data.id)
      .then( status => {
        // TODO: TO socket
        console.log('Ter kick')
      })
    }
  },

  mounted() {
    //
  },

  data() {
    return {
      //
    }
  },

  props: ['data']
}
</script>
