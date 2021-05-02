<template>
<div class="c col-md-6 col-lg-4 col-xl-3">
  <div class="card y-list-card">
    <div class="card-body">
      <div class="kick">
        <div @click="kickPlayer()" class="icon-red">×</div>
      </div>
      <div class="avatar-wrapper avatar-circle">
        <img class="avatar" :src="data.avatar" alt="Avatar">
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
      this.socket.emit('kick', this.data.id)
    },

    effect() {
      $(".c").fadeIn()
    }
  },

  mounted() {
    this.effect()
  },

  data() {
    return {
      //
    }
  },

  props: ['data', 'index']
}
</script>

<style scoped>
  .c {
    display: none;
  }
</style>
