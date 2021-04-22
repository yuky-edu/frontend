<template>
<div id="class-layout">
  <div class="y-body">
    <div class="container-fluid">

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{name: 'Dashboard'}">Dashboard</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{name: 'ClassList'}">Kelas</router-link>
        </li>
        <li v-if="$route.params.code" class="breadcrumb-item">
          <router-link class="active" :to="{name: 'ClassDetail', params: {code: $route.params.code}}">{{$route.params.code}}</router-link>
        </li>
      </ol>

      <router-view/>

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
  }
}
</script>
