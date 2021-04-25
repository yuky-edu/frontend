<template>
<div id="play-layout">
  <div class="bg-play">

    <!-- <Question /> -->

    <!-- <Timer /> -->
    <WaitingRoom />

  </div>
</div>
</template>

<script>
// console.log(io)

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
    Question: require('./page/Question').default,
    Timer: require('./page/Timer').default,
    WaitingRoom: require('./page/WaitingRoom').default,
  }
}
</script>
