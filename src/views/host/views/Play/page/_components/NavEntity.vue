<template>
<div id="nav-question">
  <nav class="navbar navbar-play navbar-light navbar-expand topbar navbar-fixed-top">
    <div class="container-fluid">

      <div class="navbar-brand w-25" href="#">
        <div class="dropdown dropdown-entity">
          <button v-if="$parent.$parent.entities[data.index].type == 'q'" class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="6" fill="#FFCB4D" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.2067 8.33325H17.794C19.8533 8.33325 21 9.51992 21 11.5533V18.4399C21 20.5066 19.8533 21.6666 17.794 21.6666H12.2067C10.18 21.6666 9 20.5066 9 18.4399V11.5533C9 9.51992 10.18 8.33325 12.2067 8.33325ZM12.3867 11.4399V11.4333H14.3794C14.6667 11.4333 14.9 11.6666 14.9 11.9526C14.9 12.2466 14.6667 12.4799 14.3794 12.4799H12.3867C12.0994 12.4799 11.8667 12.2466 11.8667 11.9599C11.8667 11.6733 12.0994 11.4399 12.3867 11.4399ZM12.3867 15.4933H17.6133C17.9 15.4933 18.1333 15.2599 18.1333 14.9733C18.1333 14.6866 17.9 14.4526 17.6133 14.4526H12.3867C12.0994 14.4526 11.8667 14.6866 11.8667 14.9733C11.8667 15.2599 12.0994 15.4933 12.3867 15.4933ZM12.3867 18.54H17.6133C17.8793 18.5133 18.08 18.286 18.08 18.02C18.08 17.7466 17.8793 17.52 17.6133 17.4933H12.3867C12.1867 17.4733 11.9933 17.5666 11.8867 17.74C11.78 17.9066 11.78 18.1266 11.8867 18.3C11.9933 18.4666 12.1867 18.5666 12.3867 18.54Z"
                fill="white" />
            </svg>
            <span>
              {{
                $parent.$parent.entities[data.index].question.substr(0, 15)
              }}
              ...
            </span>
          </button>
          <button v-if="$parent.$parent.entities[data.index].type == 't'" class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="32" height="32" rx="6" fill="#00EF6E" />
              <path fill-rule="evenodd" clip-rule="evenodd"
              d="M11.0263 9.83325H13.2797C14.2197 9.83325 14.973 10.5999 14.973 11.5406V13.8133C14.973 14.7599 14.2197 15.5199 13.2797 15.5199H11.0263C10.093 15.5199 9.33301 14.7599 9.33301 13.8133V11.5406C9.33301 10.5999 10.093 9.83325 11.0263 9.83325ZM11.0263 17.4797H13.2797C14.2197 17.4797 14.973 18.2404 14.973 19.187V21.4597C14.973 22.3997 14.2197 23.1664 13.2797 23.1664H11.0263C10.093 23.1664 9.33301 22.3997 9.33301 21.4597V19.187C9.33301 18.2404 10.093 17.4797 11.0263 17.4797ZM20.9731 9.83325H18.7198C17.7798 9.83325 17.0264 10.5999 17.0264 11.5406V13.8133C17.0264 14.7599 17.7798 15.5199 18.7198 15.5199H20.9731C21.9064 15.5199 22.6664 14.7599 22.6664 13.8133V11.5406C22.6664 10.5999 21.9064 9.83325 20.9731 9.83325ZM18.7198 17.4797H20.9731C21.9064 17.4797 22.6664 18.2404 22.6664 19.187V21.4597C22.6664 22.3997 21.9064 23.1664 20.9731 23.1664H18.7198C17.7798 23.1664 17.0264 22.3997 17.0264 21.4597V19.187C17.0264 18.2404 17.7798 17.4797 18.7198 17.4797Z"
              fill="white" />
            </svg>
            <span>
              {{
                $parent.$parent.entities[data.index].theory.substr(0, 15)
              }}
              ...
            </span>
          </button>
          <div class="dropdown-menu">
            <button v-for="(item, index) in $parent.$parent.entities" @click="$parent.$parent.goToEntity(index)" :class="data.index == index ? 'active' : false" class="btn btn-light dropdown-item" type="button">
              <svg v-if="item.type == 'q'" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="6" fill="#FFCB4D" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.2067 8.33325H17.794C19.8533 8.33325 21 9.51992 21 11.5533V18.4399C21 20.5066 19.8533 21.6666 17.794 21.6666H12.2067C10.18 21.6666 9 20.5066 9 18.4399V11.5533C9 9.51992 10.18 8.33325 12.2067 8.33325ZM12.3867 11.4399V11.4333H14.3794C14.6667 11.4333 14.9 11.6666 14.9 11.9526C14.9 12.2466 14.6667 12.4799 14.3794 12.4799H12.3867C12.0994 12.4799 11.8667 12.2466 11.8667 11.9599C11.8667 11.6733 12.0994 11.4399 12.3867 11.4399ZM12.3867 15.4933H17.6133C17.9 15.4933 18.1333 15.2599 18.1333 14.9733C18.1333 14.6866 17.9 14.4526 17.6133 14.4526H12.3867C12.0994 14.4526 11.8667 14.6866 11.8667 14.9733C11.8667 15.2599 12.0994 15.4933 12.3867 15.4933ZM12.3867 18.54H17.6133C17.8793 18.5133 18.08 18.286 18.08 18.02C18.08 17.7466 17.8793 17.52 17.6133 17.4933H12.3867C12.1867 17.4733 11.9933 17.5666 11.8867 17.74C11.78 17.9066 11.78 18.1266 11.8867 18.3C11.9933 18.4666 12.1867 18.5666 12.3867 18.54Z"
                  fill="white" />
              </svg>
              <svg v-if="item.type == 't'" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="32" height="32" rx="6" fill="#00EF6E" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.0263 9.83325H13.2797C14.2197 9.83325 14.973 10.5999 14.973 11.5406V13.8133C14.973 14.7599 14.2197 15.5199 13.2797 15.5199H11.0263C10.093 15.5199 9.33301 14.7599 9.33301 13.8133V11.5406C9.33301 10.5999 10.093 9.83325 11.0263 9.83325ZM11.0263 17.4797H13.2797C14.2197 17.4797 14.973 18.2404 14.973 19.187V21.4597C14.973 22.3997 14.2197 23.1664 13.2797 23.1664H11.0263C10.093 23.1664 9.33301 22.3997 9.33301 21.4597V19.187C9.33301 18.2404 10.093 17.4797 11.0263 17.4797ZM20.9731 9.83325H18.7198C17.7798 9.83325 17.0264 10.5999 17.0264 11.5406V13.8133C17.0264 14.7599 17.7798 15.5199 18.7198 15.5199H20.9731C21.9064 15.5199 22.6664 14.7599 22.6664 13.8133V11.5406C22.6664 10.5999 21.9064 9.83325 20.9731 9.83325ZM18.7198 17.4797H20.9731C21.9064 17.4797 22.6664 18.2404 22.6664 19.187V21.4597C22.6664 22.3997 21.9064 23.1664 20.9731 23.1664H18.7198C17.7798 23.1664 17.0264 22.3997 17.0264 21.4597V19.187C17.0264 18.2404 17.7798 17.4797 18.7198 17.4797Z"
                  fill="white" />
              </svg>
              <span v-if="item.type == 'q'">{{item.question.substr(0,15)}}</span>
              <span v-if="item.type == 't'">{{item.theory.substr(0,15)}}</span>
              ...
            </button>
          </div>
        </div>
      </div>

      <ul class="nav navbar-nav flex-nowrap ml-auto">
        <!-- <li class="nav-item no-arrow mx-1 mr-5">
          <div class="form-group m-0">
            <input type="range" class="form-control-range" id="font-range">
          </div>
        </li> -->
        <li class="nav-item no-arrow mx-1">
          <span v-if="data.data.type == 'q'">
            <button v-if="$parent.isAnswered(data.data.id)"  @click="$parent.checkScore()" class="btn br-10 btn-green waves-effect shadow waves-light ml-2">Lihat Skor</button>
            <button v-if="!$parent.isAnswered(data.data.id)" :disabled="$parent.leaderboards.isChecking" @click="$parent.countBeforeCheck()" class="btn br-10 btn-green shadow waves-effect waves-light ml-2">Cek Jawaban</button>
          </span>
          <button v-if="data.index == $parent.$parent.entities.length-1" @click="$parent.$parent.openEndgameModal()" class="btn br-10 btn-outline-light waves-effect waves-light ml-2">Selesai</button>
        </li>

      </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default {

  methods: {
    //
  },

  mounted() {
    //
  },

  data() {
    return {
      data: this.$parent.$parent.entity,
    }
  }

}
</script>
