<template>
<div id="play-layout">
  <div class="bg-play">

    <!-- <Timer /> -->
    <WaitingRoom />

  </div>
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

  mounted() {
    //
  },

  data() {
    return {
      //
    }
  },

  components: {
    Timer: require('./_components/Timer').default,
    WaitingRoom: require('./_components/WaitingRoom').default,
  }
}
</script>
