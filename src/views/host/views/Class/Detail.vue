<template>
<div id="class-detail">
  <div class="y-body">
    <div class="container-fluid">

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Daftar Kelas</a>
        </li>
        <li class="breadcrumb-item active">Detail Kelas</li>
      </ol>

      <div class="row">
        <div class="col-11">
          <div class="main-title d-center-b">
            <div class="left">
              <h1>XII - Fisika Kuantum <i class="fa fa-pen"></i></h1>
            </div>
            <div class="right d-flex">
              <h1>qwerty <i class="fa fa-pen"></i></h1>
              <div class="form-group y-form">
                <select class="form-control form-control-xs">
                  <option value="item.id">Sains</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>

    </div>
  </div>
</div>
</template>

<script>
export default {

  computed: {
    yClass: function() {
      const data = this.$store.getters[this.Xyclass.g[1]] // data
      console.log(data)
      return data
    }
  },

  methods: {
    //
  },

  mounted() {
    this.$store.dispatch(this.Xyclass.a[2]) // getDataClass_
  },

  data() {
    return {
      //
    }
  },

  components: {
    QuestionCard: require('./components/QuestionCard').default
  }
}
</script>
