<template>
<div ref="cardEntity" class="theory-list mt-3">
  <div class="row">
    <div class="col-sm-11">

      <div class="card card-entity">
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
            <div class="d-flex w-100">
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

    <EntityActionButton :data="data" type="theory" />

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

  components: {
    EntityActionButton: require('./EntityActionButton').default
  },

  props: ['data', 'number']
}
</script>
