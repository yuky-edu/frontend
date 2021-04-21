<template>
<div id="y-lauout">
  <Navbar v-if="!$route.name == 'Play'"/>

  <router-view class="host-view" />

  <footer v-if="!$route.name == 'Play'">
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
    Navbar: require('./_components/Navbar').default
  }
}
</script>
