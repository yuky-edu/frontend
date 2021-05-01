<template>
<div id="nav-question">
  <nav class="navbar navbar-play navbar-light navbar-expand topbar navbar-fixed-top">
    <div class="container-fluid">

      <div class="navbar-brand w-25" href="#">
        <!-- <select class="form-control" @change="changeIndex" v-model="data.index">
          <option v-for="(item, index) in $parent.$parent.entities" :value="index">
            <span v-if="item.question">{{index+1}}. {{item.question.substr(0, 10)}}</span>
            <span v-if="item.theory">{{index+1}}. {{item.theory.substr(0, 10)}}</span>
            ...
          </option>
        </select> -->
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
          <span v-if="data.data.type == 'q'">
            <button v-if="$parent.isAnswered(data.data.id)" :disabled="$parent.leaderboards.isChecking" @click="$parent.checkScore()" class="btn br-10 shadow btn-green waves-effect waves-light ml-2">Lihat Skor</button>
            <button v-if="!$parent.isAnswered(data.data.id)" @click="$parent.countBeforeCheck()" class="btn br-10 shadow btn-green waves-effect waves-light ml-2">Cek Jawaban</button>
          </span>
          <button  v-if="data.index < $parent.$parent.entities.length-1" class="btn br-10 shadow btn-green waves-effect waves-light ml-2" @click="$parent.$parent.nextEntity()">Selanjutnya</button>
          <button v-if="data.index == $parent.$parent.entities.length-1" @click="$parent.$parent.nextEntity()" class="btn br-10 shadow btn-green waves-effect waves-light ml-2">Selesai</button>
        </li>

      </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default {

  methods: {
    changeIndex(e) {
      let val = parseInt(e.target.value)
      this.$parent.$parent.goToEntity(val)
      this.data.index = val
    }
  },

  mounted() {
    //
  },

  data() {
    return {
      data: this.$parent.$parent.entity,
    }
  }

}
</script>
