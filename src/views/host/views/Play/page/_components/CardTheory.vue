<template>
<div id="card-theory">

  <NavEntity :data="data" />

  <div class="entity-wrapper">

    <div v-if="data.data.media.type" class="mb-5">
      <div class="entity-media">

        <div v-if="data.data.media.type == 'image'">
          <img :src="data.data.media.path" alt="Yuky media">
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

    <div v-html="data.data.theory" class="entity-theory container"></div>
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
      data: this.$parent.entity
    }
  },

  components: {
    NavEntity: require('./NavEntity').default,
  }
}
</script>
