<template>
<div id="class-detail">

  <div class="row">
    <div class="col-12">
      <div class="main-title">
        <h1>
          <span>{{ dataClass.title }}</span>
          <i class="fa fa-pen edit-icon"></i>
        </h1>
      </div>
    </div>
    <div class="col-sm-8">
      <div class="right d-flex">
        <div class="col-6 pl-0">

          <div class="dropdown y-dropdown">

            <button class="btn dropdown-toggle" type="button" id="y-category" data-toggle="dropdown">
              <div class="left">
                <i class="fa fa-user"></i>
                <span>Sains</span>
              </div>
            </button>

            <div class="dropdown-menu" aria-labelledby="y-category">
              <a v-for="(item, value) in categories" class="dropdown-item" href="#">
                <i class="fa fa-user mr-2"></i>
                <span>{{ item.name }}</span>
              </a>
            </div>

          </div>
        </div>
        <div class="col-6 pr-0">
          <div class="form-group y-form">
            <input v-model="dataClass.code" type="text" class="form-control form-control-md" placeholder="Kode Kelas">
          </div>
        </div>
      </div>
      <div class="form-group y-form mt-3">
        <textarea v-model="dataClass.description" class="form-control" rows="3" placeholder="Ketik Deskripsi Kelas Disini..."></textarea>
      </div>
    </div>
    <div class="col-sm-3 text-right">
      <button class="btn br-5 btn-green btn-lg mb-2">
        <span>Mainkan</span>
        <i class="fa fa-play ml-2"></i>
      </button>
      <button class="btn br-5 btn-primary btn-lg">
        <span>Demo</span>
        <i class="fa fa-play ml-2"></i>
      </button>
    </div>
  </div>

  <QuestionCard v-for="(item, index) in question" :key="item.id" :data="item" :number="index+1" />

  <TheoryCard data="[]"/>

  <div v-if="!question.length" class="container text-center mt-3">
    <h1>Tidak ada soal.</h1>
  </div>

  <div class="row">
    <div class="col-11">
      <div class="action-bottom text-center">
        <button @click="createQuestion()" class="btn btn-green shadow br-5 mr-2">
          <span>Tambah Soal</span>
          <i class="fa fa-plus ml-2"></i>
        </button>
        <button @click="createQuestion()" class="btn btn-warning shadow br-5">
          <span>Tambah Materi</span>
          <i class="fa fa-plus ml-2"></i>
        </button>
      </div>
    </div>
  </div>

  {{question}}

</div>
</template>

<script>
export default {

  computed: {
    categories: function() {
      return this.$store.state.yclass.categories
    },

    question: function() {
      const code = this.$route.params.code
      return this.$store.state.entity.myEntity
    }

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

    createQuestion() {
      const idClass = this.$route.query.id
      this.$store.dispatch('question/createQuestion', {
        id_yclass: idClass,
        question: 'Tidak ada soal',
        a1: 'Jawaban 1',
        a2: 'Jawaban 2',
        correct: 'a1',
      }).then(data => {
        this.$router.push({ // redirect
          name: 'Class',
          query: {
            id: idClass,
            question: data.id
          }
        })
      })
    }
  },

  mounted() {
    this.getEntity()
    this.loadDataClass()
  },

  data() {
    return {
      dataClass: {
        title: 'Nama Kelas',
        code: '',
        description: '',
        category: 0,
      },
    }
  },

  watch: {
    '$store.state.yclass.myClass': function() {
      this.loadDataClass()
    }
  },

  components: {
    QuestionCard: require('./components/QuestionCard').default,
    TheoryCard: require('./components/TheoryCard').default,
  }
}
</script>
