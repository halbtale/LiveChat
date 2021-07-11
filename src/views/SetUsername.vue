<template>
	<Header />
	<div class="set-username-container">
		<!--<AppLogo></AppLogo>-->
		<AppInput
			label="What is your username?"
			v-model="userState.username"
			@submit="onUsernameSubmit"
		/>

		<AppButton @click="onUsernameSubmit">Confirm</AppButton>
	</div>
</template>

<script lang="ts">
import { LocalStorageSystem } from '@/systems/LocalStorageSystem';
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
		LocalStorageSystem.setItem('username', this.userState.username);

		this.$router.push({ name: 'ChatList' });
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
	max-width: 21rem;
}
</style>
