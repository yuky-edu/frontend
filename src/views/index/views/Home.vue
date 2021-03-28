<template>
<div class="home">

  <navbar></navbar>

  <header id="banner">
    <div class="body">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="text-light">Belajar Kreatif & Inovatif Dengan Yuky</h1>
            <!-- <p class="intro-text">A free, responsive, one page Bootstrap theme.<br>Created with love.</p><a class="btn btn-link btn-circle" role="button" href="#about"><i class="fa fa-angle-double-down animated"></i></a> -->
            <!-- <a href="/join"> -->
            <button class="btn btn-warning btn-lg btn-play">Mulai Sekarang</button>
            <!-- </a> -->
          </div>
        </div>
      </div>
    </div>
    <img class="circle" src="/assets/img/circle.svg" alt="">
    <!-- <div class="hand row">
      <div class="col-sm-4">
        <img src="/assets/img/hand-left.png" alt="">
      </div>
      <div class="4"></div>
      <div class="col-sm-4">
        <img src="/assets/img/hand-right.png" alt="">
      </div>
    </div> -->
  </header>

  <section id="about">
    <div class="header">
      <div class="title">
        <h2 class="sub-title">Kenalin Nih Yuky</h2>
        <h2 class="sub-title">Aplikasi Keren Untuk Belajar</h2>
      </div>
      <div class="bg">
        <div class="item item-1">
          <img class="obj-1" src="/assets/img/img1.png" alt="">
          <img class="obj-2" src="/assets/img/img2.png" alt="">
          <img class="obj-3" src="/assets/img/obj1.svg" alt="">
        </div>
        <div class="item item-2">
          <img class="obj-1" src="/assets/img/img3.png" alt="">
          <img class="obj-2" src="/assets/img/obj2.svg" alt="">
        </div>
      </div>
    </div>

    <div class="body">
      <div class="container text-center">
        <div class="card-wrapper">

          <div class="y-card">
            <div class="content">
              <img src="/assets/img/trophy.png" alt="">
            </div>
            <div class="title">
              <h3>Biar Ide Makin Kreatif</h3>
            </div>
          </div>

          <div class="y-card active">
            <div class="content">
              <img src="/assets/img/rocket.png" alt="">
            </div>
            <div class="title">
              <h3>Belajar Dengan Cara Yang Berbeda</h3>
            </div>
          </div>

          <div class="y-card">
            <div class="content">
              <img src="/assets/img/idea.png" alt="">
            </div>
            <div class="title">
              <h3>Biar Ide Makin Kreatif</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>


  <section>
    <div class="title">
      <h2 class="sub-title">Belum Pernah Coba Yuky ?</h2>
      <h2 class="sub-title">Lihat Tutorial ini</h2>
    </div>
    <div class="body">
      <h1 class="text-center m-5">SKIP SECTION</h1>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <h2 class="sub-title mb-5">Punya Pertanyaan? Hubungi Kami.</h2>\
      <form class="" action="" method="get">
        <div class="form-group">
          <textarea class="form-control" rows="5" id="comment" placeholder="Ingin bertanya?">
          </textarea>
        </div>
        <div class="text-right mt-4">
          <button class="btn btn-lg btn-outline-light">
            Kirim
          </button>
        </div>
      </form>

      <footer>
        <div class="header">
          <div class="mini-logo">
            <img src="/assets/img/logo.svg">
          </div>
          <div class="follow">
            <p>Ikutin Kami!</p>
            <div class="social-icon">
              <span class="glyphicon glyphicon-search"></span>
            </div>
          </div>
        </div>
        <hr>
        <div class="footer">
          <p class="copyright">© 2021 Yuky - ARNAV Developer. All rights reserved.</p>
          <div class="to-top">
          <a href="#">Kembali ke atas</a>
          </div>
        </div>
      </footer>

    </div>
  </section>

</div>

</template>

<script type="text/javascript">
import Navbar from './components/Navbar'

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

  name: 'Beranda',
  components: {
    'navbar': Navbar
  }
}
</script>

<style lang="scss">
.n-d {
    text-decoration: none;
}
</style>
