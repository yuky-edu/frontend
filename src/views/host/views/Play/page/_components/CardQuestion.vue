<template>
<div id="card-question">
  <div class="q-card">
    <div class="q-body">

      <div v-if="data.media.type" class="q-media">
        <div class="q-media-wrapper">

          <div v-if="data.media.type == 'image'">
            <img :src="data.media.path" alt="Yuky media">
          </div>

          <div v-if="data.media.type == 'audio'">
            <audio controls>
              <source :src="data.media.path" type="audio/mp3">
              Your browser does not support the audio element.
            </audio>
          </div>

          <div v-if="data.media.type == 'video'">
            <video controls>
              <source :src="data.media.path" type="video/mp4">
              Your browser does not support HTML video.
            </video>
          </div>

        </div>
      </div>

      <div class="q-text container">
        {{ data.question }}
      </div>
    </div>
    <div class="answer-body">
      <div class="row">

        <div v-for="(item, index) in data.answer" class="col-xl-4 col-lg-2">
          <div class="answer">
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

  props: ['data'],
}
</script>
