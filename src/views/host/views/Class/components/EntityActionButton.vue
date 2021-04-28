<template>
<div class="entity-action-button col question-action text-center">

  <router-link :to="{name: 'EditEntityLayout', params: {code: $route.params.code, id_entity: data.id}, query: {type: type}}" class="btn btn-warning btn-lg y-btn-icon-only shadow waves-effect waves-light mb-3">
    <i class="fa fa-pen-alt"></i>
  </router-link>

  <button class="btn btn-aqua btn-lg y-btn-icon-only shadow waves-effect waves-light mb-3">
    <i class="fas fa-copy"></i>
  </button>

  <button @click="removeEntity()" class="btn btn-danger btn-lg y-btn-icon-only shadow waves-effect waves-light">
    <i class="fa fa-trash"></i>
  </button>

</div>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    removeEntity() {
      this.$parent.$refs.cardEntity.style.opacity = 0.5
      this.$store.dispatch('entity/removeEntityById', this.data.id)
    }
  },

  mounted() {
    //
  },

  data() {
    return {
      //
    }
  },

  props: ['data', 'type']
}
</script>
