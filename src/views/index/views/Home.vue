<template>
<div class="home">

  <navbar></navbar>

  <header id="banner">
    <div class="body">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="text-light">Belajar Kreatif & Inovatif Dengan Yuky!</h1>
            <a href="/join">
              <button class="btn btn-warning btn-lg btn-play">Mulai Sekarang</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <img class="circle" src="/assets/img/circle.svg" alt="">
  </header>

  <section id="about">

    <div class="header">
      <div class="title text-center">
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

          <div class="y-card">
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

  <section id="tutorial">
    <div class="title text-center">
      <h2 class="sub-title">Belum Pernah Coba Yuky ?</h2>
      <h2 class="sub-title">Lihat Tutorial ini</h2>
    </div>
    <div class="body">
      <div class="wrapper text-center">
        <iframe class="video" src="https://www.youtube.com/embed/PjfP2tmjtQM">
        </iframe>
        <div class="bg"></div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <div class="text-center">
        <h2 class="sub-title mb-5 text-white">Punya Pertanyaan? Hubungi Kami.</h2>
      </div>
      <div class="row">
        <div class="col-lg-2 col-xl-3"></div>
        <div class="col-lg-8 col-xl-6">
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
        </div>
      </div>

      <footer>
        <div class="header">
          <div class="mini-logo">
            <img src="/assets/img/logo.svg">
          </div>
          <div class="follow">
            <p>Ikuti Kami 👇</p>
            <div class="social-icon">
              <a class="icon-wrapper" href="#">
                <span class="fa fa-user"></span>
              </a>
              <a class="icon-wrapper" href="#">
                <span class="fa fa-facebook"></span>
              </a>
              <a class="icon-wrapper" href="#">
                <span class="fa fa-youtube"></span>
              </a>
              <a class="icon-wrapper" href="#">
                <span class="fa fa-instagram"></span>
              </a>
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
