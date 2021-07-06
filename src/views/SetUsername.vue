<template>
	<div class="set-username-container">
		<AppInput
			label="What is your username?"
			v-model="userState.username"
			@submit="onUsernameSubmit"
		/>
	</div>
</template>

<script lang="ts">
import { StoreSystem } from '@/systems/StoreSystem';
import { Options, Vue } from 'vue-class-component';
@Options({
	name: 'SetUsername'
})
export default class SetUsername extends Vue {
	get userState() {
		return StoreSystem.state.userState;
	}

	onUsernameSubmit() {
		//const user = this.$gun.user()
		//const username = this.userState.username;
		//user.get('username').put({username})
		this.$router.push({ name: 'SetChatName' });
	}
}
</script>

<style scoped lang="scss">
.set-username-container {
	display: grid;

	align-content: center;
	height: 82vh;
	width: 80%;
	margin: auto;
}
</style>
