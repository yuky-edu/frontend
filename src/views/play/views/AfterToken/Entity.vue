<template>
<div id="entity">
  {{entity}}
  <div class="w-100 text-center">
    <button class="btn btn-success-gradient btn-sm btn-play" name="button">
      <span>Lihat Soal</span>
    </button>
  </div>

  <div class="w-100 text-white text-center mt-5">
    <p>Klik di Jawaban yang Benar 👍</p>
  </div>

  <div class="row mt-5">
    <div class="col-6">
      <PlayCard/>
    </div>
    <div class="col-6">
      <PlayCard/>
    </div>
    <div class="col-6">
      <PlayCard/>
    </div>
    <div class="col-6">
      <PlayCard/>
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
    requestEntity() {
      this.socket.emit('reqEntity')
      this.socket.on('resEntity', (data) => {
        this.entity = data
      })
      this.socket.on('rank', (data) => {
        this.$emit('changePage', 'Score')
      })
    }
  },

  mounted() {
    this.requestEntity()
  },

  data() {
    return {
      entity: ''
    }
  },

  components: {
    PlayCard
  }
}
</script>
