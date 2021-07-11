<template>
	<Header />
	<div class="set-chat-name-container">
		<span class="set-chat-name-container__description">
			The chat name must be equal to the person you're chatting to
		</span>
		<!--<AppLogo></AppLogo>-->
		<AppInput
			label="What is your chat's name?"
			v-model="chatName"
			@submit="onChatNameSubmit"
		/>
		<AppButton @click="onChatNameSubmit">Confirm</AppButton>
	</div>
</template>

<script lang="ts">
import { StoreSystem } from '@/systems/StoreSystem';
import { Options, Vue } from 'vue-class-component';
import { LocalStorageSystem } from '../systems/LocalStorageSystem';
@Options({
	name: 'SetChatname'
})
export default class SetChatname extends Vue {
	chatName = '';
	get userState() {
		return StoreSystem.state.userState;
	}

	mounted() {
		this.userState.chatName = '';
	}

	onChatNameSubmit() {
		if (this.chatName) {
			this.userState.chatName = this.chatName;

			this.userState.chatNameArray.add(this.chatName);
			LocalStorageSystem.setItem(
				'chatNameArray',
				Array.from(this.userState.chatNameArray)
			);
			this.$router.push({ name: 'Chat' });
		}
	}
}
</script>

<style scoped lang="scss">
.set-chat-name-container {
	display: grid;
	align-content: center;
	height: 82vh;
	width: 80%;
	max-width: 21rem;
	margin: auto;
	&__description {
		color: var(--color-primary);
		margin-bottom: 1rem;
		text-align: center;
	}
}
</style>
