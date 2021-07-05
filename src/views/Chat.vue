<template>
	<div class="chat-container">
		<div class="chat-container__top">
			<div v-for="(message, i) in messageList" :key="String(i)">
				<AppChatMessage
					position="right"
					v-if="userState.username === message.username"
				>
					{{ message.message }}
				</AppChatMessage>

				<AppChatMessage position="left" v-else>
					{{ message.message }}
				</AppChatMessage>
			</div>
		</div>
		<div class="chat-container__bottom">
			<AppInput
				class="chat-container__bottom__text-field"
				label="Message"
				v-model="text"
				backgroundColor="accent"
				@input="syncMessage"
			/>

			<AppSendButton
				class="chat-container__bottom__button"
				@click="submitMessage"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { StoreSystem } from '@/systems/StoreSystem';
import { Options, Vue } from 'vue-class-component';
import { v4 as uuid } from 'uuid';
@Options({
	name: 'Chat'
})
export default class Chat extends Vue {
	text = '';
	currentMessageId = '';
	prova = '';
	messageMap = new Map<string, { message: string; username: string }>();

	messageList = [];

	get appGunNode() {
		return this.$gun.get('livechat');
	}
	get currentChatName() {
		return this.userState.chatName;
	}
	get userState() {
		return StoreSystem.state.userState;
	}
	get currentMessageNode() {
		return this.appGunNode
			.get(`${this.currentChatName}`)
			.get('messageListData')
			.get(this.currentMessageId);
	}
	get currentMessageListNode() {
		return this.appGunNode.get(`${this.currentChatName}`).get('messageList');
	}

	addMessageToList() {
		return new Promise((res) => {
			if (this.currentMessageNode) {
				this.currentMessageListNode.set(this.currentMessageNode, (ack) => {
					res(ack);
				});
			}
		});
	}
	syncMessage() {
		const username = this.userState.username;
		return new Promise((res) => {
			this.currentMessageNode.put(
				{
					message: this.text,
					username: username
				},

				(ack) => {
					res(ack);
				}
			);
		});
	}
	setNewId() {
		const newId = uuid();
		this.currentMessageId = newId;
	}

	async submitMessage() {
		this.setNewId();
		//const username = this.userState.username;
		//this.username = username;

		this.text = '';
		await this.syncMessage();
		await this.addMessageToList();
	}

	async created() {
		this.currentMessageListNode.map().on((data, path) => {
			const idMatches = path.match(/\/([^/]*)$/);

			if (idMatches.length < 1) return;
			const id = idMatches[1];
			if (data.message && data.username) {
				this.messageMap.set(id, data as { message: string; username: string });
			} else if (!data.message && this.messageMap.has(id)) {
				this.messageMap.delete(id);
			}
			this.messageList = Array.from(this.messageMap.values());
		});
		this.setNewId();
		await this.syncMessage();
		await this.addMessageToList();
	}
}
</script>

<style scoped lang="scss">
.chat-container {
	display: grid;
	grid-template-rows: repeat(10, 1fr);
	height: 90vh;
	row-gap: 1rem;
	max-width: 30rem;
	margin: auto;
	&__top {
		grid-row: 1 / 9;
		overflow-y: scroll;
	}
	&__bottom {
		margin: 0 1rem;
		grid-row: 9 / 11;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		align-items: center;
		&__text-field {
			grid-column: 1 / 10;
		}
		&__button {
			grid-column: 11 / 13;
		}
	}
}
</style>
