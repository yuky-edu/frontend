<template>
<div ref="cardEntity" class="questions-list mt-3">
  <div class="row">
    <div class="col-sm-11">

      <div class="card card-entity">
        <div class="card-label question">
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
              <div class="col-10 ctn">
                <span>{{ data.question }}</span>
              </div>
              <div class="col-2">
                <button class="btn btn-gray-2 btn-sm shadow d-flex waves-effect waves-light">
                  <span>Lihat Media</span>
                  <i class="ml-2 fa fa-eye"></i>
                </button>
              </div>
            </div>
          </div>

          <hr>

          <div class="row">
            <div class="col-sm-10">
              <div class="row">

                <div v-for="(item, index) in data.answer" class="col-4">
                  <div class="answer">
                    <button class="btn btn-sm btn-outline-gray-2" :class="{selected: item.correct}" disabled>
                      {{ item.label }}
                    </button>
                    <span>{{ item.value }}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <EntityActionButton :data="data" type="question"/>

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

  props: ['data', 'number'],
}
</script>

<style scoped>
  .ctn {
    height: 250px;
    max-height: 250px;
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
</style>
