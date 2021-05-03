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
                <div class="btn">
                  <svg @click="changeYclass('title')" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0323 15.0209L13.6221 6.49908C13.9802 6.03953 14.1076 5.50822 13.9882 4.96724C13.8847 4.47544 13.5823 4.00783 13.1286 3.65309L12.0224 2.7743C11.0594 2.00838 9.86559 2.089 9.18114 2.96779L8.44099 3.92801C8.34548 4.04814 8.36936 4.22551 8.48874 4.32226C8.48874 4.32226 10.359 5.82185 10.3988 5.85409C10.5262 5.97503 10.6217 6.13628 10.6455 6.32977C10.6853 6.7087 10.4227 7.06344 10.0327 7.11181C9.84967 7.136 9.67458 7.07956 9.54724 6.97475L7.58145 5.41067C7.48594 5.33891 7.34269 5.35423 7.2631 5.45098L2.59135 11.4977C2.28892 11.8766 2.18546 12.3684 2.28892 12.8441L2.88582 15.4321C2.91766 15.5692 3.03704 15.6659 3.1803 15.6659L5.80666 15.6337C6.28418 15.6256 6.72987 15.4079 7.0323 15.0209ZM10.7098 14.2149H14.9924C15.4102 14.2149 15.75 14.5592 15.75 14.9825C15.75 15.4065 15.4102 15.75 14.9924 15.75H10.7098C10.292 15.75 9.95212 15.4065 9.95212 14.9825C9.95212 14.5592 10.292 14.2149 10.7098 14.2149Z" fill="#666"/>
                  </svg>
                </div>
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
                    <div class="btn">
                      <svg @click="changeYclass('code')" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0323 15.0209L13.6221 6.49908C13.9802 6.03953 14.1076 5.50822 13.9882 4.96724C13.8847 4.47544 13.5823 4.00783 13.1286 3.65309L12.0224 2.7743C11.0594 2.00838 9.86559 2.089 9.18114 2.96779L8.44099 3.92801C8.34548 4.04814 8.36936 4.22551 8.48874 4.32226C8.48874 4.32226 10.359 5.82185 10.3988 5.85409C10.5262 5.97503 10.6217 6.13628 10.6455 6.32977C10.6853 6.7087 10.4227 7.06344 10.0327 7.11181C9.84967 7.136 9.67458 7.07956 9.54724 6.97475L7.58145 5.41067C7.48594 5.33891 7.34269 5.35423 7.2631 5.45098L2.59135 11.4977C2.28892 11.8766 2.18546 12.3684 2.28892 12.8441L2.88582 15.4321C2.91766 15.5692 3.03704 15.6659 3.1803 15.6659L5.80666 15.6337C6.28418 15.6256 6.72987 15.4079 7.0323 15.0209ZM10.7098 14.2149H14.9924C15.4102 14.2149 15.75 14.5592 15.75 14.9825C15.75 15.4065 15.4102 15.75 14.9924 15.75H10.7098C10.292 15.75 9.95212 15.4065 9.95212 14.9825C9.95212 14.5592 10.292 14.2149 10.7098 14.2149Z" fill="#666"/>
                      </svg>
                    </div>
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
                  <div class="btn">
                    <svg @click="changeYclass('description')" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0323 15.0209L13.6221 6.49908C13.9802 6.03953 14.1076 5.50822 13.9882 4.96724C13.8847 4.47544 13.5823 4.00783 13.1286 3.65309L12.0224 2.7743C11.0594 2.00838 9.86559 2.089 9.18114 2.96779L8.44099 3.92801C8.34548 4.04814 8.36936 4.22551 8.48874 4.32226C8.48874 4.32226 10.359 5.82185 10.3988 5.85409C10.5262 5.97503 10.6217 6.13628 10.6455 6.32977C10.6853 6.7087 10.4227 7.06344 10.0327 7.11181C9.84967 7.136 9.67458 7.07956 9.54724 6.97475L7.58145 5.41067C7.48594 5.33891 7.34269 5.35423 7.2631 5.45098L2.59135 11.4977C2.28892 11.8766 2.18546 12.3684 2.28892 12.8441L2.88582 15.4321C2.91766 15.5692 3.03704 15.6659 3.1803 15.6659L5.80666 15.6337C6.28418 15.6256 6.72987 15.4079 7.0323 15.0209ZM10.7098 14.2149H14.9924C15.4102 14.2149 15.75 14.5592 15.75 14.9825C15.75 15.4065 15.4102 15.75 14.9924 15.75H10.7098C10.292 15.75 9.95212 15.4065 9.95212 14.9825C9.95212 14.5592 10.292 14.2149 10.7098 14.2149Z" fill="#666"/>
                    </svg>
                  </div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3 text-right">
      <button class="waves-effect waves-light btn br-5 btn-green shadow btn-lg mb-2">
        <span>Mainkan</span>
        <i class="fa fa-arrow-right ml-2"></i>
      </button>
      <button class="waves-effect waves-light btn br-5 btn-primary shadow btn-lg">
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
      console.log('load data')
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
          id_entity: id
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
    this.getEntity()
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
