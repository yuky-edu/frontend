<template>
<div id="edit-entity">

  <EditQuestion v-if="type == 'question'" />
  <EditTheory v-if="type == 'theory'" />

</div>
</template>

<script>
export default {

  computed: {
    type: function() {
      const type = this.$route.query.type
      if (type) return type
      // TODO: Kembali ke halaman detail jika tidak ada type
    },
  },

  methods: {
    getEntity() {
      const code = this.$route.params.code
      this.$store.dispatch('entity/getEntitiesByCodeClass', code)
    },

    loadDataClass() {
      const code = this.$route.params.code
      const myClass = this.$store.state.yclass.myClass
      const data = myClass.find(data => data.code == code)
      // console.log(data)
      if (data) this.dataClass = data
    },
  },

  mounted() {
    window.$params = this.$route.params
    window.$query = this.$route.query

    this.getEntity()
  },

  watch: {
    //
  },

  data() {
    return {
      //
    }
  },

  components: {
    EditQuestion: require('./components/EditQuestion').default,
    EditTheory: require('./components/EditTheory').default,
  }
}
</script>
