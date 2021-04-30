<template>
<div class="play-card">
  <div class="label-wrapper">
    <div class="circle-wrapper" @click="selectCard()">
      <h1>A</h1>
    </div>
  </div>
  <p class="answer">Soekarno Hatta</p>
  <div class="w-100 text-center">
    <button class="btn show-a y-play-custom-shadow btn-xs" name="button">
      <span>Selengkapnya</span>
    </button>
  </div>
</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    selectCard: function()
    {
      this.$router.push({name: 'CardSelect'})
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
}
</script>
