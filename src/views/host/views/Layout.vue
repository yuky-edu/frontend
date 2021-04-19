<template>
<div id="y-lauout">
  <Navbar/>

  <router-view class="host-view" />

  <footer>
    <p>© 2021 Yuky - ARNAV Developer. All rights reserved.</p>
  </footer>

</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
  },

  beforeMount() {
    // this.$store.dispatch('question/countMyQuestion')
    this.$store.dispatch('yclass/getCategories')
    this.$store.dispatch('yclass/getMyClass')
  },

  data() {
    return {
      //
    }
  },

  components: {
    Navbar: require('./components/Navbar').default
  }
}
</script>
