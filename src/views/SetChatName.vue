<template>
	<div class="set-chat-name-container">
		<AppInput
			label="What is your chat's name?"
			v-model="userState.chatName"
			@submit="onChatNameSubmit"
		/>
	</div>
</template>

<script lang="ts">
import { StoreSystem } from '@/systems/StoreSystem';
import { Options, Vue } from 'vue-class-component';
@Options({
	name: 'SetChatname'
})
export default class SetChatname extends Vue {
	get userState() {
		return StoreSystem.state.userState;
	}

	onChatNameSubmit() {
		this.$router.push({ name: 'Chat' });
	}
}
</script>

<style scoped lang="scss">
.set-chat-name-container {
	display: grid;
	place-content: center;
	height: 90vh;
}
</style>
