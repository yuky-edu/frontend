<template>
<div id="class-detail">

  <div class="row">
    <div class="col-12">
      <div class="main-title">
        <div class="input-group w-75 border border-top-0 border-left-0 border-right-0">
          <input disabled autocomplete="off" style="font-size: 30px; font-weight: 600" id="title" v-model="dataClass.title" type="text" class="yclass-input shadow-none bg-transparent border-0 form-control form-control-md" placeholder="Nama Kelas">
          <div class="input-group-append">
            <span class="input-group-text bg-transparent border-0">
              <span v-if="dataClass.edit == 'title'">
                <button class="btn btn-sm text-primary no-outline" @click="updateYclass()">
                  <i class="fa fa-check"></i>
                </button>
              </span>
              <span v-else>
                <button class="btn btn-sm no-outline" @click="changeYclass('title')">
                  <i class="fa fa-edit"></i>
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-8">
      <div class="right d-flex">
        <div class="col-6 pl-0">
          <select id="category" class="form-control">
            <option v-for="(item, value) in categories" :selected="dataClass.category == item.id ? true:false" :value="item.id" :data-image="item.image">
              {{ item.name }}
            </option>
          </select>

        </div>
        <div class="col-6 pr-0">
          <div class="form-group y-form border">
            <div class="input-group">
              <input disabled autocomplete="off" id="code" v-model="dataClass.code" type="text" class="yclass-input shadow-none bg-transparent border-0 form-control form-control-md" placeholder="Kode Kelas">
              <div class="input-group-append">
                <span class="input-group-text bg-transparent border-0">
                  <span v-if="dataClass.edit == 'code'">
                    <button class="btn btn-sm text-primary no-outline" @click="updateYclass()">
                      <i class="fa fa-check"></i>
                    </button>
                  </span>
                  <span v-else>
                    <button class="btn btn-sm no-outline" @click="changeYclass('code')">
                      <i class="fa fa-edit"></i>
                    </button>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group y-form mt-3">
        <div class="form-group y-form border">
          <div class="input-group">
            <textarea disabled id="description" v-model="dataClass.description" class="yclass-input shadow-none bg-transparent border-0 form-control" rows="3" placeholder="Ketik Deskripsi Kelas Disini..."></textarea>
            <div class="input-group-append">
              <span class="input-group-text bg-transparent border-0">
                <span v-if="dataClass.edit == 'description'">
                  <button class="no-outline btn btn-sm text-primary" @click="updateYclass()">
                    <i class="fa fa-check"></i>
                  </button>
                </span>
                <span v-else>
                  <button class="btn btn-sm no-outline" @click="changeYclass('description')">
                    <i class="fa fa-edit"></i>
                  </button>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3 text-right">
      <button class="btn br-5 btn-green btn-lg mb-2">
        <span>Mainkan</span>
        <i class="fa fa-arrow-right ml-2"></i>
      </button>
      <button class="btn br-5 btn-primary btn-lg">
        <span>Demo</span>
        <i class="fa fa-play-circle ml-2"></i>
      </button>
    </div>
  </div>

  <div v-for="(item, index) in myEntities">
    <QuestionCard v-if="item.type == 'q'" :key="item.id" :data="item" :number="index+1" />
    <TheoryCard v-if="item.type == 't'" :data="item" :number="index+1" />
  </div>



  <div v-if="!myEntities.length" class="alert alert-warning shadow-sm text-center my-3">
    <h1>Belum ada materi dan soal di kelas ini.</h1>
  </div>

  <div class="row">
    <div class="col-11">
      <div class="action-bottom text-center">
        <button @click="createQuestion()" class="btn btn-green shadow br-5 mr-2">
          <span>Tambah Soal</span>
          <i class="fa fa-plus ml-2"></i>
        </button>
        <button @click="createTheory()" class="btn btn-warning shadow br-5">
          <span>Tambah Materi</span>
          <i class="fa fa-plus ml-2"></i>
        </button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {

  computed: {
    categories: function() {
      return this.$store.state.yclass.categories
    },

    myEntities: function() {
      const data = this.$store.state.entity.myEntity['entity_' + this.$route.params.code]
      // console.log(data)
      if (data) return data
      return []
    }

  },

  methods: {
    getEntity() {
      this.$store.dispatch('entity/getEntitiesByCodeClass', $params.code)
    },

    loadDataClass() {
      const myClass = this.$store.state.yclass.myClass
      const data = myClass.find(data => data.code == $params.code)
      // console.log(data)
      if (data) {
        this.dataClass.id = data.id
        this.dataClass.title = data.title
        this.dataClass.description = data.description
        this.dataClass.code = data.code
        this.dataClass.category = data.yclass_category.id

        // Run msdropdown
        $(document).ready(function() {
          $("#category").msDropDown()
        })
      }
    },

    createQuestion() {
      const idClass = this.dataClass.id
      this.$store.dispatch('entity/createEntity', {
        id_yclass: idClass,
        question: '(soal kosong)',
        a1: 'Pilihan Jawaban 1',
        a2: 'Pilihan Jawaban 2',
        correct: 'a1',
        type: 'q'
      }).then(data => this.redirectAftarCreateEntity(data.id, 'question'))
    },

    createTheory() {
      const idClass = this.dataClass.id
      this.$store.dispatch('entity/createEntity', {
        id_yclass: idClass,
        theory: '(materi kosong)',
        type: 't'
      }).then(data => this.redirectAftarCreateEntity(data.id, 'theory'))
    },

    redirectAftarCreateEntity(id, type) {
      this.$router.push({
        name: 'EditEntityLayout',
        params: {
          code: $params.code,
          id: id
        },
        query: {
          type: type
        }
      })
    },

    changeYclass(type) {
      this.closeChange()
      $('#' + type).removeClass('bg-transparent').removeAttr('disabled').focus()
      this.dataClass.edit = type
    },

    closeChange() {
      this.dataClass.edit = ''
      $('.yclass-input').addClass('bg-transparent')
      $('.yclass-input').attr('disabled', 'disabled')
    },

    updateYclass() {
      const myClass = this.$store.state.yclass.myClass
      const data = myClass.find(data => data.code == $params.code)
      const value = this.dataClass[this.dataClass.edit]
      const key = Object.keys(this.dataClass).find(key => this.dataClass[key] === value);
      if (value !== data[key]) {
        const id = this.dataClass.id
        this.$store.dispatch('yclass/updateClass', {
          id,
          [key]: value
        }).then(() => {
          if (key == 'code') {
            data.code = value
            this.$router.push({
              name: 'ClassDetail',
              params: {
                code: value
              }
            })
            window.$params = this.$route.params
            window.$query = this.$route.query
            this.loadDataClass()
            this.getEntity()
          }
        })
      }
      this.closeChange()
    },

    handleUpdateCategory() {
      const _this = this
      $("#category").change(function() {
        const id = _this.dataClass.id
        _this.$store.dispatch('yclass/updateClass', {
          id,
          yclass_category: this.value
        })
      })
    }

  },

  beforeMount() {
    window.$params = this.$route.params
    window.$query = this.$route.query
    this.getEntity()
  },

  mounted() {
    this.loadDataClass()
    this.handleUpdateCategory()
  },

  data() {
    return {
      dataClass: {
        id: '',
        title: '',
        code: '',
        description: '',
        category: 0,
        edit: ''
      }
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

<style scoped>
.no-outline,
.no-outline:hover {
  outline: none;
}
</style>
