<template>
<div id="nav-question">
  <nav class="navbar navbar-play navbar-light navbar-expand topbar fixed-top">
    <div class="container-fluid">

      <div class="navbar-brand avatar-list" href="#">
        <div class="avatar-wrapper">
          <img class="rounded-circle img-fluid" src="/assets/avatars/avatar.png" alt="Avatar">
        </div>
        <div class="avatar-wrapper">
          <img class="rounded-circle img-fluid" src="/assets/avatars/avatar.png" alt="Avatar">
        </div>
        <div class="avatar-wrapper">
          <img class="rounded-circle img-fluid" src="/assets/avatars/avatar.png" alt="Avatar">
        </div>
      </div>

      <div class="more-list">
        <button class="btn btn-link rounded-circle mr-3" type="button">
          <i class="fas fa-bars"></i>
        </button>
        <span>24 Lainya</span>
      </div>

      <ul class="nav navbar-nav flex-nowrap ml-auto">
        <li class="nav-item no-arrow mx-1 mr-5">
          <div class="form-group m-0">
            <!-- <label for="font-range">14 px</label> -->
            <input type="range" class="form-control-range" id="font-range">
          </div>
        </li>
        <li class="nav-item no-arrow mx-1">

          <button v-if="data.index > 0" class="btn br-10 shadow btn-danger waves-effect waves-light" @click="$parent.$parent.previousEntity()">Sebelumnya</button>

          <button  v-if="data.index < $parent.$parent.entities.length-1" class="btn br-10 shadow btn-green waves-effect waves-light ml-2" @click="$parent.$parent.nextEntity()">Selanjutnya</button>

          <button v-else @click="$parent.$parent.nextEntity()" class="btn br-10 shadow btn-green waves-effect waves-light ml-2">Selesai</button>

        </li>
        <li class="nav-item no-arrow mx-1">
          <button @click="$parent.$parent.checkAnswer()" class="btn br-10 shadow btn-green waves-effect waves-light ml-2">Cek Jawaban</button>
        </li>

      </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default {

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

  props: ['data']
}
</script>
