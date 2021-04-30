<template>
<div id="card-select" class="text-center text-white">
  <div class="container">
    <div class="w-100 text-center mb-3">
      <button class="btn btn-light">...</button>
    </div>
    <div class="play-card">
      <div class="label-wrapper">
        <div class="circle-wrapper" @click="selectCard()">
          <h1>A</h1>
        </div>
      </div>
      <p class="answer">Soekarno Hatta</p>
      <div class="w-100 text-center">
        <button class="btn show-a btn-warning btn-xs" name="button">
          <span>Selengkapnya</span>
        </button>
      </div>
    </div>
    <div class="mt-4 text-center">
      <button class="btn btn-outline-light">Batalkan Jawaban</button>
    </div>
  </div>
</div>
</template>

<script>
import PlayCard from '../components/Card'

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
    PlayCard
  }
}
</script>
