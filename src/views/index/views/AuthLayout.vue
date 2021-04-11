<template>
<div>
  <div class="container-fluid">
    <div class="row sub-fluid">
      <div class="col-lg-4 d-none d-lg-block y-panel-left">
        <div class="y-wrapper">
          <div class="row">
            <div class="col-6 text-right">
              <router-link :to="{ name: 'Login' }">
                <button :class="$route.name === 'Register' ? 'border-transparent' : false" class="btn btn-outline-light" name="button">Masuk</button>
              </router-link>
            </div>
            <div class="col-6 text-left">
              <router-link :to="{ name: 'Register'}">
                <button :class="$route.name === 'Login' ? 'border-transparent' : false" class="btn btn-outline-light" name="button">Daftar</button>
              </router-link>
            </div>
          </div>
          <div class="v-panel-body">
            <h1>IPSUM DOLOR SIT AMET</h1>
            <p>LOREM IPSUM DOLOR SIT AMET</p>
          </div>
          <div class="back">
            <router-link :to="{name: 'Home'}">
              <span class="fa fa-arrow-left"></span>
              <p>Kembali ke Beranda</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-8 y-panel-right">
        <div class="y-wrapper">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
