<template>
	<Header subtitle="Chat" />
	<div class="container-chat-name-list">
		<div
			class="container-chat-name-list__chat"
			v-for="(chatName, i) in getAllChatOfUser"
			:key="i"
			@click="goToChat(chatName)"
		>
			<div class="container-chat-name-list__chat__avatar">
				<icon icon="user-circle" />
			</div>
			<span>{{ chatName }}</span>
			<div
				class="container-chat-name-list__chat__delete"
				@click.stop="deleteChat(chatName)"
			>
				<icon icon="times-circle" />
			</div>
		</div>
		<div class="container-chat-name-list__add-chat" @click="addNewChat">
			<icon icon="plus" />
		</div>
	</div>
</template>
<script lang="ts">
import { LocalStorageSystem } from '@/systems/LocalStorageSystem';
import { StoreSystem } from '@/systems/StoreSystem';
import { Vue } from 'vue-class-component';
export default class ChatNameList extends Vue {
	get getAllChatOfUser() {
		const allChats = [...StoreSystem.state.userState.chatNameArray];
		return allChats;
	}
	addNewChat() {
		this.$router.push({ name: 'SetChatName' });
	}
	goToChat(chatName) {
		StoreSystem.state.userState.chatName = chatName;
		this.$router.push({ name: 'Chat' });
	}
	deleteChat(chatName) {
		StoreSystem.state.userState.chatNameArray.delete(chatName);
		LocalStorageSystem.setItem(
			'chatNameArray',
			Array.from(StoreSystem.state.userState.chatNameArray)
		);
	}
}
</script>
<style lang="scss">
.container-chat-name-list {
	max-width: 30rem;
	margin: auto;
	margin-top: 2rem;
	display: flex;
	align-items: center;
	justify-content: unset;
	flex-direction: column;
	width: 90%;
	&__title {
		color: var(--color-dark);
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
		position: relative;
		height: 4rem;
		&__avatar {
			margin-left: 1rem;
			justify-content: center;
			align-items: center;
			display: flex;
			//position: absolute;
			width: 3rem;
			height: 3rem;
			border-radius: 20rem;
			color: var(--color-gray);
			background-color: white;

			svg {
				font-size: 3rem;
				width: 1.5rem;
				height: 5rem;
				cursor: pointer;
			}
		}

		&__delete {
			position: absolute;
			right: 1rem;
			justify-content: center;
			align-items: center;
			display: flex;
			border-radius: 50%;
			color: var(--color-gray);
			background-color: white;
			width: 3rem;
			height: 3rem;

			svg {
				font-size: 1.6rem;
				cursor: pointer;
			}
		}

		& > span {
			display: grid;
			place-content: center;
			position: absolute;
			padding: 0 3rem;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			font-size: 1.1rem;
			text-align: center;
			color: var(--color-primary);
			//margin-left:10rem;
		}
	}
	&__add-chat {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		margin: 1rem 1rem 0 0;

		align-self: flex-end;
		background-color: var(--color-lighter);
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
