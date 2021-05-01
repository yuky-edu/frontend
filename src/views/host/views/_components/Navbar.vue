<template>
<nav class="navbar navbar-light navbar-expand topbar static-top">
  <div class="container-fluid">
    <router-link class="navbar-brand logo" tag="a" :to="{name: 'Dashboard'}">
      <img src="/assets/img/logo.svg">
    </router-link>
    <!-- <button class="btn btn-link rounded-circle mr-3" type="button"><i class="fas fa-bars"></i></button> -->
    <ul class="nav navbar-nav flex-nowrap ml-auto">
      <!-- <li class="nav-item dropdown no-arrow"><a data-toggle="dropdown" aria-expanded="false" class="dropdown-toggle nav-link" href="#"><i class="fas fa-search"></i></a>
        <div role="menu" class="dropdown-menu dropdown-menu-right p-3 animated--grow-in" aria-labelledby="searchDropdown">
          <form class="form-inline mr-auto navbar-search w-100">
            <div class="input-group">
              <input type="text" class="bg-light form-control border-0 small" placeholder="Search for ..." />
              <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
            </div>
          </form>
        </div>
      </li> -->
      <li class="nav-item dropdown no-arrow mx-1">
        <div class="nav-item dropdown no-arrow">

          <a data-toggle="dropdown" class="nav-link" href="#">
            <span class="badge badge-danger badge-counter">3+</span>
            
<svg width="26" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Iconly/Bold/Notification">
<g id="Notification">
<path id="Notification_2" fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 8.79633C18.7071 10.0523 19.039 10.7925 19.7695 11.6456C20.3231 12.2741 20.5 13.0808 20.5 13.956C20.5 14.8302 20.2128 15.6601 19.6373 16.3339C18.884 17.1417 17.8215 17.6573 16.7372 17.747C15.1659 17.8809 13.5937 17.9937 12.0005 17.9937C10.4063 17.9937 8.83505 17.9263 7.26375 17.747C6.17846 17.6573 5.11602 17.1417 4.36367 16.3339C3.78822 15.6601 3.5 14.8302 3.5 13.956C3.5 13.0808 3.6779 12.2741 4.23049 11.6456C4.98384 10.7925 5.29392 10.0523 5.29392 8.79633V8.3703C5.29392 6.68834 5.71333 5.58852 6.577 4.51186C7.86106 2.9417 9.91935 2 11.9558 2H12.0452C14.1254 2 16.2502 2.98702 17.5125 4.62466C18.3314 5.67916 18.7071 6.73265 18.7071 8.3703V8.79633ZM9.07367 20.0608C9.07367 19.5573 9.53582 19.3266 9.96318 19.2279C10.4631 19.1222 13.5093 19.1222 14.0092 19.2279C14.4366 19.3266 14.8987 19.5573 14.8987 20.0608C14.8738 20.5402 14.5926 20.9653 14.204 21.2352C13.7001 21.628 13.1088 21.8767 12.4906 21.9664C12.1487 22.0107 11.8128 22.0117 11.4828 21.9664C10.8636 21.8767 10.2723 21.628 9.76938 21.2342C9.37978 20.9653 9.09852 20.5402 9.07367 20.0608Z" fill="white"/>
</g>
</g>
</svg>

          </a>

          <div role="menu" class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in">
            <h6 class="dropdown-header">alerts center</h6>
            <a class="d-flex align-items-center dropdown-item" href="#">
              <div class="mr-3">
                <div class="bg-primary icon-circle"><i class="fas fa-file-alt text-white"></i></div>
              </div>
              <div><span class="small text-gray-500">December 12, 2019</span>
                <p>A new monthly report is ready to download!</p>
              </div>
            </a>
            <a class="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a>
          </div>
        </div>
      </li>
      <li class="nav-item dropdown no-arrow mx-1">
        <div class="nav-item dropdown no-arrow">

          <a data-toggle="dropdown" class="nav-link" href="#">
            
<svg width="24" height="24" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2043 0C12.21 0 13.1775 0.3975 13.8893 1.11075C14.6018 1.8225 15 2.7825 15 3.7875V9.7125C15 11.805 13.2975 13.5 11.2043 13.5H3.795C1.70175 13.5 0 11.805 0 9.7125V3.7875C0 1.695 1.69425 0 3.795 0H11.2043ZM12.3975 4.90499L12.4575 4.84499C12.6367 4.62749 12.6367 4.31249 12.4492 4.09499C12.345 3.98324 12.2017 3.91499 12.0525 3.89999C11.895 3.89174 11.745 3.94499 11.6317 4.04999L8.25 6.74999C7.815 7.11074 7.19175 7.11074 6.75 6.74999L3.375 4.04999C3.14175 3.87749 2.81925 3.89999 2.625 4.10249C2.4225 4.30499 2.4 4.62749 2.57175 4.85249L2.67 4.94999L6.0825 7.61249C6.5025 7.94249 7.01175 8.12249 7.545 8.12249C8.07675 8.12249 8.595 7.94249 9.01425 7.61249L12.3975 4.90499Z" fill="white"/>
</svg>

            <span class="badge badge-danger badge-counter">7</span>
          </a>

          <div role="menu" class="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in">
            <h6 class="dropdown-header">alerts center</h6>
            <a class="d-flex align-items-center dropdown-item" href="#">
              <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="avatars/avatar4.jpeg" />
                <div class="bg-success status-indicator"></div>
              </div>
              <div class="font-weight-bold">
                <div class="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I&#39;ve been having.</span></div>
                <p class="small text-gray-500 mb-0">Emily Fowler - 58m</p>
              </div>
            </a>
            <a class="text-center dropdown-item small text-gray-500" href="#">Show All Alerts</a>
          </div>
        </div>
        <div class="shadow dropdown-list dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown"></div>
      </li>
      <div class="d-none d-sm-block topbar-divider"></div>

      <li class="nav-item nav-menu dropdown no-arrow">
        <div class="nav-item dropdown no-arrow avatar">
          <a data-toggle="dropdown" class="dropdown-toggle nav-link" href="#">
            <img class="rounded-circle" src="/assets/avatars/avatar.png" />
            <span class="d-none d-lg-inline">Hai, {{_profile.first_name}}</span>
          </a>
          <div role="menu" class="dropdown-menu dropdown-menu-right animated--grow-in">
            <router-link class="dropdown-item active" :to="{name: 'Dashboard'}">
              

<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 4.875C2.25 2.90609 2.27108 2.25 4.875 2.25C7.47892 2.25 7.5 2.90609 7.5 4.875C7.5 6.84391 7.5083 7.5 4.875 7.5C2.2417 7.5 2.25 6.84391 2.25 4.875Z" stroke="#6935F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 4.875C10.5 2.90609 10.5211 2.25 13.125 2.25C15.7289 2.25 15.75 2.90609 15.75 4.875C15.75 6.84391 15.7583 7.5 13.125 7.5C10.4917 7.5 10.5 6.84391 10.5 4.875Z" stroke="#6935F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 13.125C2.25 11.1561 2.27108 10.5 4.875 10.5C7.47892 10.5 7.5 11.1561 7.5 13.125C7.5 15.0939 7.5083 15.75 4.875 15.75C2.2417 15.75 2.25 15.0939 2.25 13.125Z" stroke="#6935F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 13.125C10.5 11.1561 10.5211 10.5 13.125 10.5C15.7289 10.5 15.75 11.1561 15.75 13.125C15.75 15.0939 15.7583 15.75 13.125 15.75C10.4917 15.75 10.5 15.0939 10.5 13.125Z" stroke="#6935F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

 Dashboard
            </router-link>
            <a class="dropdown-item" href="#">
              
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.9887 11.5095C6.08798 11.5095 3.61084 11.9481 3.61084 13.7045C3.61084 15.4609 6.07227 15.9152 8.9887 15.9152C11.8894 15.9152 14.3658 15.4759 14.3658 13.7202C14.3658 11.9645 11.9051 11.5095 8.9887 11.5095Z" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.98867 9.00441C10.8922 9.00441 12.4351 7.46084 12.4351 5.55727C12.4351 3.6537 10.8922 2.11084 8.98867 2.11084C7.0851 2.11084 5.54152 3.6537 5.54152 5.55727C5.5351 7.45441 7.06795 8.99798 8.96438 9.00441H8.98867Z" stroke="#070744" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Profile Akun
            </a>
            <a class="dropdown-item" href="#">
              
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.52853 7.65137V12.7965" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.02853 5.18945V12.7965" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4714 10.3701V12.7964" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5143 1.5H5.48571C3.03571 1.5 1.5 3.23406 1.5 5.68887V12.3111C1.5 14.7659 3.02857 16.5 5.48571 16.5H12.5143C14.9714 16.5 16.5 14.7659 16.5 12.3111V5.68887C16.5 3.23406 14.9714 1.5 12.5143 1.5Z" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Analisis
            </a>
            <!-- <div class="dropdown-divider"></div> -->
            <router-link class="dropdown-item" :to="{name: 'ClassList'}">
              
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.99634 12.5075V10.6047" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6425 3.99756C14.91 3.99756 15.93 5.02506 15.93 6.29256V8.87256C14.085 9.95256 11.6475 10.6051 8.9925 10.6051C6.3375 10.6051 3.9075 9.95256 2.0625 8.87256V6.28506C2.0625 5.01756 3.09 3.99756 4.3575 3.99756H13.6425Z" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6213 3.99426V3.71976C11.6213 2.80476 10.8788 2.06226 9.96384 2.06226H8.02884C7.11384 2.06226 6.37134 2.80476 6.37134 3.71976V3.99426" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.08081 11.6121L2.22256 13.4938C2.31856 14.7621 3.37531 15.7423 4.64656 15.7423H13.3458C14.6171 15.7423 15.6738 14.7621 15.7698 13.4938L15.9116 11.6121" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Kelas
            </router-link>
            <a class="dropdown-item" href="#">
             
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6051 5.71765L15.1382 4.90758C14.7433 4.22214 13.8681 3.98568 13.1817 4.37898V4.37898C12.855 4.57145 12.4651 4.62605 12.0981 4.53075C11.7311 4.43545 11.417 4.19808 11.2252 3.87097C11.1018 3.66305 11.0355 3.42623 11.033 3.18447V3.18447C11.0441 2.79686 10.8979 2.42124 10.6276 2.14319C10.3573 1.86514 9.98596 1.70834 9.59819 1.7085H8.65769C8.27779 1.70849 7.91355 1.85987 7.64556 2.12915C7.37758 2.39842 7.22794 2.76338 7.22977 3.14328V3.14328C7.21851 3.92763 6.57942 4.55755 5.79499 4.55747C5.55322 4.55496 5.3164 4.48865 5.10849 4.36525V4.36525C4.42211 3.97195 3.5469 4.20841 3.15197 4.89385L2.65082 5.71765C2.25637 6.40223 2.48961 7.27689 3.17256 7.67417V7.67417C3.61649 7.93047 3.88996 8.40413 3.88996 8.91673C3.88996 9.42934 3.61649 9.903 3.17256 10.1593V10.1593C2.49048 10.5539 2.25698 11.4264 2.65082 12.109V12.109L3.12451 12.9259C3.30955 13.2598 3.62001 13.5062 3.98721 13.6105C4.3544 13.7149 4.74804 13.6686 5.08103 13.482V13.482C5.40837 13.2909 5.79845 13.2386 6.16457 13.3366C6.53068 13.4346 6.84249 13.6747 7.03068 14.0037C7.15408 14.2116 7.22039 14.4484 7.2229 14.6902V14.6902C7.2229 15.4826 7.86528 16.125 8.65769 16.125H9.59819C10.3879 16.125 11.0292 15.4868 11.033 14.6971V14.6971C11.0311 14.316 11.1817 13.95 11.4512 13.6805C11.7207 13.411 12.0867 13.2604 12.4678 13.2623C12.7089 13.2687 12.9448 13.3348 13.1543 13.4545V13.4545C13.8388 13.8489 14.7135 13.6157 15.1108 12.9328V12.9328L15.6051 12.109C15.7964 11.7806 15.8489 11.3894 15.751 11.0222C15.653 10.655 15.4127 10.342 15.0833 10.1524V10.1524C14.7539 9.96291 14.5136 9.64987 14.4157 9.28265C14.3177 8.91542 14.3703 8.5243 14.5616 8.19591C14.686 7.97869 14.8661 7.79859 15.0833 7.67417V7.67417C15.7622 7.27711 15.9949 6.40756 15.6051 5.72451V5.72451V5.71765Z" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="9.13141" cy="8.91681" r="1.97712" stroke="#070744" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Pengaturan
            </a>
            <a @click="logOut()" class="dropdown-item text-danger mb-0" href="#">
              
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2621 5.54211V4.84236C11.2621 3.31611 10.0246 2.07861 8.49835 2.07861H4.8421C3.3166 2.07861 2.0791 3.31611 2.0791 4.84236V13.1899C2.0791 14.7161 3.3166 15.9536 4.8421 15.9536H8.50585C10.0276 15.9536 11.2621 14.7199 11.2621 13.1981V12.4909" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.3572 9.01611H7.32642" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1611 6.82983L16.3571 9.01608L14.1611 11.2031" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Keluar
            </a>
          </div>
        </div>
      </li>

    </ul>
  </div>
</nav>
</template>

<script>
export default {

  computed: {
    _profile: function() {
      return this.$store.state.profile.profile
    }
  },

  methods: {
    logOut: function() {
      const token = this.$cookies.get(this.TOKEN)
      this.axios.get(this.API_URL + '/auth/logout', {
          params: {
            token: token
          }
        })
        .then(() => {
          this.$cookies.remove(this.TOKEN)
          window.location.href = '/#/auth/login'
        })
    },
  },

  beforeMount() {
    this.$store.dispatch('profile/myInfo')
  },

  mounted() {

  },

  data() {
    return {
      //
    }
  },
}
</script>
