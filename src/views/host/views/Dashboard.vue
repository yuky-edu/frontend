<template>
	<v-app>
		<h1>Halaman Dashboard</h1>
		<a href="/">Home</a>
		<a href="#" @click="logOut()">Logout</a>
	</v-app>
</template>

<script>
	export default{

		computed: {
			//
		},

		methods: {
			logOut: function()
			{
				const _token = sessionStorage.getItem('_token')
				this.axios.get(this.API_URL + '/auth/logout', {
					params: {
						token: _token
					}
				})
				.then( () => {
					sessionStorage.removeItem('_token')
					window.location.href = '/#/login'
				})
			},
			checkToken: function()
			{
				//
			}
		},

		mounted() {
			this.checkToken()
		},

		data() {
			return {
				//
			}
		},
	}
</script>

<style lang="scss">

</style>