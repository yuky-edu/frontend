<template>
<div class="play-timer">
  <div class="box-timer" :class="{animate: animate}">
    <div class="count-timer">
      <span>{{ counter }}</span>
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
    playCounter(){
      this.animate = true
      setInterval(() => {
        this.counter--
      }, 1500)
    }
  },

  mounted() {
    this.playCounter()
  },

  data() {
    return {
      animate: false,
      counter: 10,
    }
  },
}
</script>
