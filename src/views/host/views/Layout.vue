<template>
<div id="app">
  <Navbar></Navbar>

  <router-view class="host-view" />

  <footer>
    <p>© 2021 Yuky - ARNAV Developer. All rights reserved.</p>
  </footer>
</div>
</template>

<script>
import Navbar from './components/Navbar'

export default {

  computed: {
    //
  },

  methods: {
    //
  },

  mounted() {
    this.$store.dispatch(this.Xprofile.a[0])
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
