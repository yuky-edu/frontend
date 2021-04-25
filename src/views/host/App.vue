<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/javascript">
// NOTE: mengambil data semua player yang sedang bergabung di id sesision
// this.$store.dispatch('player/getPlayersBySession', 1);

// NOTE: kick player berdasarkan id player
// this.$store.dispatch('player/kickPlayer', 1);


// NOTE: buat sesi berdasarkan id yclass
// this.$store.dispatch('yclass_session/createSession', {
//    id_yclass: 2
// });

// NOTE: get sesi berdasarkan id
// this.$store.dispatch('yclass_session/getSession', 2);

// NOTE: update sesi berdasarkan id
// this.$store.dispatch('yclass_session/updateSession', {
//    id: 2,
//    data: {
//      status: 'in:off,wait,on_mode_block,on_mode_open'
//    }
// });
</script>
