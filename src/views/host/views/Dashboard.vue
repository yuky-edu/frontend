<template>
<div id="dashboard">
  <Navbar></Navbar>
</div>
</template>

<script>
import Navbar from './components/Navbar'

export default {

  computed: {
    //
  },

  methods: {
    checkToken: function() {
      //
    }
  },

  mounted() {
    this.checkToken()
  },

  data() {
    return {
      //
    }
  },

  components: {
    Navbar
  }
}
</script>

<style lang="scss">

</style>
