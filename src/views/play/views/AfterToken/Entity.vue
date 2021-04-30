<template>
<div id="entity">

  <div v-if="entity.type == 'q'" class="y-question">
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="media-wrepper" v-if="entity.media.type !== null && entity.media.file !== null && entity.media.path !== null">
              <div v-if="entity.media.type == 'image'">
                <img :src="entity.media.path" class="img-fluid" alt="Yuky media">
              </div>

              <div v-if="entity.media.type == 'audio'">
                <audio controls>
                  <source :src="entity.media.path" type="audio/mp3">
                  Your browser does not support the audio element.
                </audio>
              </div>

              <div v-if="entity.media.type == 'video'">
                <video controls>
                  <source :src="entity.media.path" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
            </div>
            <div v-html="entity.question"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Oke</button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 text-center">
      <button class="btn y-play-custom-shadow show-q waves-effect waves-light" data-toggle="modal" data-target="#exampleModalLong" name="button">
        <span>Tampilkan Soal</span>
      </button>
    </div>

    <div class="w-100 text-white text-center mt-5">
      <p>Silahkan pilih kartu yang benar 👍</p>
    </div>

    <div class="row mt-5">
      <div v-for="(item, index) in entity.answer" class="col-6">
        <div class="play-card">
          <div class="label-wrapper">
            <div class="circle-wrapper" @click="selectCard()">
              <h1>{{ item.label }}</h1>
            </div>
          </div>
          <p class="answer">
            {{ item.value }}
          </p>
          <div class="text-center">
            <button class="btn w-100 show-a y-play-custom-shadow waves-effect waves-light btn-sm" name="button">
              <span><i class="fa fa-ellipsis-h"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="entity.type == 't'" class="y-theory">
    <div class="container">
      <div class="media-wrepper">
        <div v-if="entity.media.type == 'image'">
          <img :src="entity.media.path" class="img-fluid" alt="Yuky media">
        </div>

        <div v-if="entity.media.type == 'audio'">
          <audio controls>
            <source :src="entity.media.path" type="audio/mp3">
            Your browser does not support the audio element.
          </audio>
        </div>

        <div v-if="entity.media.type == 'video'">
          <video controls>
            <source :src="entity.media.path" type="video/mp4">
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
      <div v-html="entity.theory" class="text-wrapper"></div>
    </div>
  </div>

  <!-- {{entity}} -->

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
