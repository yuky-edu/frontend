<template>
<div id="layout-token">
  <router-view/>
</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    //
  },

  beforeMount() {
    this.$store.dispatch('yclass_session/getMySession')
    this.$store.dispatch('player/getMyInfo')
  },

  mounted() {
    //
  },

  data() {
    return {
      // player_session: this.$cookies.get('player_session')
    }
  },
}
</script>
