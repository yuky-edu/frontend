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
          clearInterval(interval)
        }
      }.bind(this), 1500)
    }
  },

  mounted() {
    this.playCounter()
  },

  data() {
    return {
      animate: false,
      counter: 3,
    }
  },
}
</script>
