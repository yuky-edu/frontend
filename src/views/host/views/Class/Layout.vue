<template>
<div id="class-layout">

  <div class="y-body">
    <div class="container-fluid">

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{name: 'Dashboard'}">Dashboard</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{name: 'Class'}">Daftar Kelas</router-link>
        </li>
        <li class="breadcrumb-item">
          <a href="/host#/class?id=2">Detail Kelas</a>
        </li>
        <li class="breadcrumb-item active">Detail Soal</li>
      </ol>

      <ClassQuestion v-if="$route.query.id && $route.query.question" />
      <ClassDetail v-else-if="$route.query.id " />
      <ClassList v-else />


    </div>
  </div>

</div>
</template>

<script>
import ClassList from './List'
import ClassDetail from './Detail'
import ClassQuestion from './Question'

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

  components: {
    ClassList,
    ClassDetail,
    ClassQuestion
  }
}
</script>
