<template>
	<v-app>
		<v-container>
			<h1>Landing Page</h1>
			<a class="n-d" href="/join">
				<v-btn>
					Join
				</v-btn>
			</a>
			<router-link class="n-d" :to="{name: 'Login'}">
				<v-btn>
					Login
				</v-btn>
			</router-link>
			<router-link class="n-d" :to="{name: 'Register'}">
				<v-btn>
					Register
				</v-btn>
			</router-link>
		</v-container>
	</v-app>
</template>

<script>

	export default{

		computed: {
			//
		},

		methods:
		{
			//
		},

		mounted()
		{
			//
		},

		data()
		{
			return {
				//
			}
		},
	}
	
</script>

<style lang="scss">
.n-d{
	text-decoration: none;
}
</style>