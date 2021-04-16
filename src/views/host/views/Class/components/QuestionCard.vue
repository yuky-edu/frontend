<template>
<div class="questions-list mt-3">
  <div class="row">
    <div class="col-sm-11">

      <div class="card card-question">
        <div class="card-body">
          <div class="d-flex">
            <div class="q-number mr-3">
              <button class="btn btn-sm btn-gray waves-effect waves-light">32</button>
            </div>
            <div class="d-flex d-center-b w-100">
              <div class="col-10">
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
                <div class="col-4">
                  <div class="answer">
                    <button class="btn btn-sm btn-outline-gray-2">A</button>
                    <span>Lorem ipsum dolor sit.</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="answer">
                    <button class="btn btn-sm btn-outline-gray-2 selected">B</button>
                    <span>Lorem ipsum dolor sit.</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="answer">
                    <button class="btn btn-sm btn-outline-gray-2">C</button>
                    <span>Lorem ipsum dolor sit.</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="answer">
                    <button class="btn btn-sm btn-outline-gray-2">D</button>
                    <span>Lorem ipsum dolor sit.</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="answer">
                    <button class="btn btn-sm btn-outline-gray-2">E</button>
                    <span>Lorem ipsum dolor sit.</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    <div class="col question-action text-center">
      <a href="/host#/class/2/123" class="btn btn-warning btn-lg y-btn-icon-only shadow waves-effect waves-light mb-3">
        <i class="fa fa-pen"></i>
      </a>
      <a class="btn btn-aqua btn-lg y-btn-icon-only shadow waves-effect waves-light mb-3">
        <i class="fa fa-eye"></i>
      </a>
      <button class="btn btn-danger btn-lg y-btn-icon-only shadow waves-effect waves-light">
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
      console.log(this.data)
    },

    data() {
      return {
        //
      }
    },

    props: ['data']
  }
</script>
