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
                2
              </button>
            </div>
            <div class="d-flex d-center-b w-100">
              <div class="col-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facere eius cupiditate aperiam nisi? Perspiciatis fugiat, excepturi nemo blanditiis obcaecati repellat modi voluptate assumenda necessitatibus, molestias iste ipsa voluptatum inventore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolorum expedita at debitis, iusto voluptate dolor commodi, recusandae accusamus, architecto, eaque maiores eveniet laboriosam impedit quos esse incidunt odit. Nemo.
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
      <!-- <router-link :to="{name: 'Class', query: {id: $route.query.id, question: data.id}}" class="btn btn-warning btn-lg y-btn-icon-only shadow waves-effect waves-light mb-3">
        <i class="fa fa-pen"></i>
      </router-link>
      <button class="btn btn-aqua btn-lg y-btn-icon-only shadow waves-effect waves-light mb-3">
        <i class="fa fa-eye"></i>
      </button>
      <button @click="$store.dispatch('question/removeQuestionByid', {idClass: $route.query.id, idQuestion: data.id})" class="btn btn-danger btn-lg y-btn-icon-only shadow waves-effect waves-light">
        <i class="fa fa-trash"></i>
      </button> -->
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
