<template>
	<v-app>
		<v-container>
			<h1>Login Page</h1>

			<v-form style="margin-bottom: 12px" lazy-validation
			v-model="rules.valid" 
			@submit.prevent="loginHost()"
			>
			<v-text-field label="E-Mail" type="email" name="login.email"
			:rules="rules.email"
			v-model="login.email"
			></v-text-field>

			<v-text-field label="Password" name="login.password" required
			:rules="rules.password"
			:append-icon="visiblePassword ? 'mdi-eye-off' : 'mdi-eye'"
			:type="visiblePassword ? 'password' : 'text'"
			v-model="login.password"
			@click:append="handleVisiblePassowrd"
			></v-text-field>

			<v-btn type="submit"
			color="primary"
			:loading="btnLoginLoading"
			:disabled="!rules.valid || btnLoginLoading"
			>LOGIN</v-btn>

		</v-form>

		<router-link :to="{name: 'Home'}">Home</router-link>

	</v-container>
</v-app>
</template>

<script>
	export default{

		computed: {
			//
		},

		methods: {
			loginHost: function()
			{
				window.console.log(this.API_URL)
				this.btnLoginLoading = true

				// this.axios.post(this.API_URL + '/auth/login', this.login)
				// .then( ({data}) => {
				// 	window.console.log(data)
				// 	if(data.status)
				// 	{
				// 		sessionStorage.setItem('_token', data.token)
				// 		window.location.href = '/host'
				// 	}else{
				// 		sessionStorage.removeItem('_token')
				// 	}
				// 	this.btnLoginLoading = false
				// })
				// .catch( errors => {

				// })
				// .then( response => {

				// })
			},

			alreadyLogin: function()
			{
				const _token = sessionStorage.getItem('_token')
				if(_token)
				{
					window.location.href = '/host'
				}
			},

			handleVisiblePassowrd: function()
			{
				this.visiblePassword = !this.visiblePassword
			},
		},

		mounted() {
			this.alreadyLogin()
		},

		data() {
			return {
				login: {
					email: 'host@gmail.com',
					password: 'host',
				},
				rules: {
					email: [
					v => v != '' || 'E-mail is required.'
					],
					password: [
					v => v != '' || 'Password is required.'
					],
					valid: false
				},
				visiblePassword: true,
				btnLoginLoading: false
			}
		},
	}
</script>