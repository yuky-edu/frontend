<template>
<div class="theory-list mt-3">
  <div class="row">
    <div class="col-sm-11">

      <div class="card card-question">
        <div class="card-label theory">
          <div class="icon">
            <i class="fa fa-bars"></i>
          </div>
        </div>
        <div class="card-body">
          <div class="d-flex">
            <div class="q-number mr-3">
              <button class="btn btn-sm btn-gray waves-effect waves-light">
                {{ number }}
              </button>
            </div>
            <div class="d-flex d-center-b w-100">
              <div class="col-10">
                {{ data.theory }}
              </div>
              <div class="col-2">
                <button class="btn btn-gray-2 btn-sm shadow d-flex waves-effect waves-light">
                  <span>Lihat Media</span>
                  <i class="ml-2 fa fa-eye"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    <div class="col question-action text-center">
      <router-link :to="{name: 'EditEntityLayout', params: {code: $route.params.code, id: data.id}, query: {type: 'theory'}}" class="btn btn-warning btn-lg y-btn-icon-only shadow waves-effect waves-light mb-3">
        <i class="fa fa-pen"></i>
      </router-link>
      <button class="btn btn-aqua btn-lg y-btn-icon-only shadow waves-effect waves-light mb-3">
        <i class="fa fa-eye"></i>
      </button>
      <button @click="$store.dispatch('entity/removeEntityById', data.id)" class="btn btn-danger btn-lg y-btn-icon-only shadow waves-effect waves-light">
        <i class="fa fa-trash"></i>
      </button>
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
  },

  props: ['data', 'number']
}
</script>
