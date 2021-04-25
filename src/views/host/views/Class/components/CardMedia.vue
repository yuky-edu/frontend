<template>
<div class="card card-media">
  <div class="card-body">
    <div class="media-wrapper">
      <div v-if="!issetsMedia" class="media-button">
        <button @click="choiseMedia('image')" class="btn btn-warning btn-lg y-btn-icon-only shadow waves-effect waves-light">
          <i class="fa fa-image"></i>
        </button>
        <button @click="choiseMedia('audio')" class="btn btn-aqua btn-lg y-btn-icon-only shadow waves-effect waves-light">
          <i class="fa fa-file-audio"></i>
        </button>
        <button @click="choiseMedia('video')" class="btn btn-success btn-lg y-btn-icon-only shadow waves-effect waves-light">
          <i class="fa fa-file-video"></i>
        </button>
        <input ref="inputMedia" :accept="acceptMedia.use" type="file" class="d-none" @change="previewMedia">
      </div>

      <div class="media-preview">
        <img v-if="data.media.type == 'image'" :src="data.media.path" class="img-fluid" alt="image-preview">
        <audio v-else-if="data.media.type == 'audio'" controls>
          <source :src="data.media.path" type="audio/mp3">
          Your browser does not support the audio element.
        </audio>
        <video v-else-if="data.media.type == 'video'" controls>
          <source :src="data.media.path" type="video/mp4">
          Your browser does not support HTML video.
        </video>
        <span v-else class="alt">Tidak Ada Media</span>
      </div>

      <div v-if="issetsMedia" @click="removeMedia()" class="btn-remove text-center">
        <button class="btn btn-danger shadow mb-3 waves-effect waves-light">
          <span>Hapus</span>
        </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {

  computed: {
    data: function() {
      return this.$parent.data
    }
  },

  methods: {
    choiseMedia(type) {
      this.acceptMedia.use = this.acceptMedia[type]
      window.$mediaType = type
      setTimeout(() => {
        this.$refs.inputMedia.click()
      }, 50)
    },

    previewMedia(e) {
      const file = e.target.files[0]
      const blob = URL.createObjectURL(file)
      this.data.media = {
        type: $mediaType,
        path: blob,
        file: file
      }
      // console.log(this.data)
    },

    removeMedia() {
      const mediaTemp = {
        path: null,
        type: null,
        file: null,
      }

      // TODO: Remove media in back and

      this.data.media = mediaTemp
    },
  },

  watch: {
    'data.media.path': function() {
      this.issetsMedia = this.data.media.path ? true : false
    },
  },

  mounted() {
    //
  },

  data() {
    return {
      acceptMedia: {
        image: 'image/*',
        audio: 'audio/*',
        video: 'video/*',
        use: null,
      },
      issetsMedia: false
    }
  },
}
</script>
