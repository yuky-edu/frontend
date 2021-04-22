<template>
<div id="play-layout">
  <div class="bg-play">

    <Question />

    <!-- <Timer /> -->
    <!-- <WaitingRoom /> -->

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
    Question: require('./_components/Question').default,
    Timer: require('./_components/Timer').default,
    WaitingRoom: require('./_components/WaitingRoom').default,
  }
}
</script>
