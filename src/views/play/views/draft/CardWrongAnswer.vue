<template>
<div id="card-select" class="text-center text-white">
  <div class="container">
    <div class="w-100 text-center mb-3">
      <button class="btn btn-danger">
        <i class="fa fa-check"></i>
      </button>
    </div>
    <div class="play-card text-primary">
      <div class="label-wrapper">
      </div>
      <h1>Ini icon</h1>
      <h1>Yahhh</h1>
      <p class="answer">Jawaban kamu belum benar</p>
      <div class="w-100 text-center">
      </div>
    </div>
    <div class="mt-4 text-center">
      <button class="btn btn-warning">Lihat Penjelasan</button>
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
