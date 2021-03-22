<template>
	<v-app>
		<v-container>
			<h1>Login Page</h1>

			<v-form style="margin-bottom: 12px" @submit.prevent="loginHost()">

				<v-text-field label="E-Mail" type="email" name="login.email" v-model="login.email">
				</v-text-field>

				<v-text-field label="Password" type="password" name="login.password" v-model="login.password">
				</v-text-field>

				<v-btn type="submit">LOGIN</v-btn>

			</v-form>

			<router-link :to="{name: 'Home'}">Home</router-link>

		</v-container>
	</v-app>
</template>

<script>

	import {axios} from 'axios'

	export default{
	
		computed: {
			//
		},
	
		methods: {
			loginHost: function()
			{
				window.console.log(axios)
				// window.axios.post(window.API_URL + '/auth/login', this.login)
				// .then( response => {
				// 	window.console.log(response)
				// })
			}
		},
	
		mounted() {
			//
		},
	
		data() {
			return {
				login: {
					email: '',
					password: '',
				}
			}
		},
	}
</script>