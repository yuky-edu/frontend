<template>
<div class="questions-list mt-3">
  <div class="row">
    <div class="col-sm-11">

      <div class="card card-question">
        <div class="card-body">
          <div class="d-flex">
            <div class="q-number mr-3">
              <button class="btn btn-sm btn-gray waves-effect waves-light">
                {{ number }}
              </button>
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

                <div v-for="(item, index) in answer" class="col-4">
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
    <div class="col question-action text-center">
      <router-link :to="{name: 'Class', query: {id: $route.query.id, question: data.id}}" class="btn btn-warning btn-lg y-btn-icon-only shadow waves-effect waves-light mb-3">
        <i class="fa fa-pen"></i>
      </router-link>
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
    answer: function() {
      const correct = this.data.correct
      var answerList = []
      this.answerKey.forEach((key, i) => {
        if (this.data[key]) {
          var _answer = {
            correct: false,
            label: this.label[i],
            value: this.data[key],
          }
          if (key == correct) _answer.correct = true
          answerList.push(_answer)
        }
      })

      // console.log(answerList)

      if (answerList.length) return answerList
      return []
    }
  },

  methods: {
    //
  },

  mounted() {
    console.log(this.data)
  },

  data() {
    return {
      label: ['A', 'B', 'C', 'D', 'E', 'F'],
      answerKey: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'],
    }
  },

  props: ['data', 'number']
}
</script>
