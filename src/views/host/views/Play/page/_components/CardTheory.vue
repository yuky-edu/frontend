<template>
<div id="card-theory">
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

      <div class="q-text container text-white">
        {{ data.theory }}
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

  props: ['data', 'index']
}
</script>
