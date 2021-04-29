<template>
<div id="card-question">

  <NavEntity :data="data" />

  <div class="e-card">
    <div class="e-body">

      <div v-if="data.data.media.type" class="e-media">
        <div class="e-media-wrapper">

          <div v-if="data.data.media.type == 'image'">
            <img :src="data.media.path" alt="Yuky media">
          </div>

          <div v-if="data.data.media.type == 'audio'">
            <audio controls>
              <source :src="data.data.media.path" type="audio/mp3">
              Your browser does not support the audio element.
            </audio>
          </div>

          <div v-if="data.data.media.type == 'video'">
            <video controls>
              <source :src="data.data.media.path" type="video/mp4">
              Your browser does not support HTML video.
            </video>
          </div>

        </div>
      </div>

      <div v-html="data.data.question" class="e-text container">
      </div>
    </div>
    <div class="answer-body">
      <div class="row">
        <div v-for="(item, index) in data.data.answer" class="col-xl-4 col-lg-6">
          <div class="answer" :class="data.isCheckAnswer && data.data.answer[index].correct ? 'bg-success' : false">
            <button class="btn btn-sm">
              {{ item.label }}
            </button>
            <span>{{ item.value }}</span>
          </div>
        </div>

      </div>
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
    checkAnswer(){

    }
  },

  beforeMount() {
    this.data.isCheckAnswer = false
  },

  mounted() {

  },

  data() {
    return {
      //
    }
  },

  props: ['data'],

  components: {
    NavEntity: require('./NavEntity').default,
  }
}
</script>
