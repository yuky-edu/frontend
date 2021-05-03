<template>
<div class="play-timer asdasd">
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
      var interval = setInterval(function() {
        this.counter--
        if (this.counter < 0) {
          this.$parent.changePage('Entity')
          this.socket.emit('startGame')
          this.tickFile.pause()
          clearInterval(interval)
        }
      }.bind(this), 1000)
    }
  },

  mounted() {
    this.playCounter()
    this.tickFile.play()
  },

  data() {
    return {
      animate: false,
      counter: 3,
      tickFile: new Audio('../../../../../assets/sound/tick.mp3')
    }
  },
}
</script>
