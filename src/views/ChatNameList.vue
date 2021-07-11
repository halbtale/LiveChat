<template>
	<div class="container-chat-name-list">
		<h1 class="container-chat-name-list__title">Chats</h1>
		<div
			class="container-chat-name-list__chat"
			v-for="(chatName, i) in getAllChatOfUser"
			:key="i"
			@click="goToChat"
		>
			<div class="container-chat-name-list__chat__avatar"><icon icon="user-circle" /></div>
			<span>{{ chatName }}</span><span>Users In This Chat: 2</span>
		</div>
		<div class="container-chat-name-list__add-chat" @click="addNewChat">
			<icon icon="plus" />
			
		</div>
	</div>
</template>
<script lang="ts">
import { StoreSystem } from '@/systems/StoreSystem';
import { Vue } from 'vue-class-component';
import { LocalStorageSystem } from '../systems/LocalStorageSystem';
export default class ChatNameList extends Vue {
	get getAllChatOfUser() {
		const allChats = [...new Set(StoreSystem.state.userState.chatNameArray)];
		return allChats;
	}
	addNewChat() {
		this.$router.push({ name: 'SetChatName' });
	}
	goToChat() {
		this.$router.push({ name: 'Chat' });
	}
}
</script>
<style lang="scss">
.container-chat-name-list {
	display: flex;
	align-items: center;
	justify-content: unset;
	flex-direction: column;
	width: 100%;
	&__title {
		color: var(--color-rose-gold);
		font-size: 1.5rem;
	}
	&__chat {
		background-color: #fff;
		width: 100%;
		cursor: pointer;
		margin-bottom: 1rem;
		display: flex;
		//text-align: center;
		//border-bottom:3px solid var(--color-dark);
		//justify-content: center;
		align-items: center;
		height: 4rem;
		&__avatar {
			margin-left: 1rem;
			justify-content:center;
			align-items: center;
			display:flex;
			//position: absolute;
			width: 3rem;
			height: 3rem;
			border-radius: 20rem;
			color: var(--color-dark);

			svg {
			font-size:3rem;
			width: 1.5rem;
			height: 5rem;
			cursor: pointer;
		}
		}
		& > span {
			font-size:1.1rem;
			margin-left:2rem;
			//width: 100%;
			color: var(--color-primary);
			//margin-left:10rem;
		}
	}
	&__add-chat {
		position:fixed;
		bottom:2rem;
		right:2rem;
		margin: 1rem 1rem 0 0;

		align-self: flex-end;
		background-color: var(--color-accent-dark);
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
		display: grid;
		place-content: center;
		color: var(--color-dark);
		font-size: 4em;

		svg {
			width: 1.5rem;
			height: 1.5rem;
			cursor: pointer;
		}
	}
}
</style>
