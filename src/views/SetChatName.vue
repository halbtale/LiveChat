<template>
	<div class="set-chat-name-container">
		<span class="set-chat-name-container__description">
			inserisci un nome uguale tra te e quello che si vuole connettere
		</span>

		<AppInput
			label="What is your chat's name?"
			v-model="chatName"
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
	chatName = '';
	get userState() {
		return StoreSystem.state.userState;
	}

	onChatNameSubmit() {
		this.userState.chatName = this.chatName;
		this.$router.push({ name: 'Chat' });
	}
}
</script>

<style scoped lang="scss">
.set-chat-name-container {
	display: grid;
	place-content: center;
	height: 82vh;
	&__description{
		color:#0088cc;
		margin-bottom:1rem;
	}
}
</style>
