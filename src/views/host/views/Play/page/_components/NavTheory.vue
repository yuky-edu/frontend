<template>
<div id="nav-theory">
  <nav class="navbar navbar-light navbar-expand topbar static-top">
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

          <button v-if="$parent.entity.index > 0" class="btn br-10 shadow btn-danger waves-effect waves-light" @click="$parent.previousEntity()">Sebelumnya</button>

          <button  v-if="$parent.entity.index < $parent.entities.length - 1" class="btn br-10 shadow btn-green waves-effect waves-light ml-2" @click="$parent.nextEntity()">Selanjutnya</button>

          <button v-else @click="$parent.nextEntity()" class="btn br-10 shadow btn-green waves-effect waves-light ml-2">Selesai</button>

        </li>
      </ul>
    </div>
  </nav>
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
}
</script>
