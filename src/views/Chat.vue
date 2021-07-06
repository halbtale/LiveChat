<template>
	<div class="chat-container">
		<div class="chat-container__top" ref="chat">
			<div v-for="(messageId, i) in messageIdList" :key="String(i)">
				<template v-if="messageMap.get(messageId)">
					<AppChatMessage
						position="right"
						@delete="deleteSingleMessageFromList(messageId, i)"
						v-if="userState.username === messageMap.get(messageId).username"
					>
						{{ messageMap.get(messageId).message }}
					</AppChatMessage>

					<AppChatMessage position="left" v-else>
						{{ messageMap.get(messageId).message }}
					</AppChatMessage>
				</template>
			</div>
		</div>
		<div class="chat-container__bottom">
			<AppInput
				id="input"
				class="chat-container__bottom__text-field"
				label="Message"
				v-model="text"
				backgroundColor="accent"
				@input="syncMessage"
				@submit="submitMessage"
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
	selectedItem = 0;
	item: Array<any> = [];
	currentMessageId = '';
	prova = '';
	messageMap = new Map<string, { message: string; username: string }>();

	messageIdList = [];

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
		return this.currentMessageListDataNode.get(this.currentMessageId);
	}

	get currentMessageListDataNode() {
		return this.appGunNode.get(`${this.currentChatName}`).get('messageListData');
	}

	sendMessageTrackingEvent() {
		if (this.$gtag) {
			this.$gtag.event('send_message_action', {
				event_category: 'engagement',
				event_label: 'method'
			});
		}
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
		this.sendMessageTrackingEvent();
		this.setNewId();
		this.text = '';
		await this.syncMessage();
	}

	async created() {
		this.currentMessageListDataNode
			.map()
			.on((data: { message: string; username: string }, id: string) => {
				if (!data || !data.message || !data.username || !id) return;
				if (data.message && data.username) {
					this.messageMap.set(
						id,
						data as { message: string; username: string }
					);
				} else if (!data.message && this.messageMap.has(id)) {
					this.messageMap.delete(id);
				}
				this.messageIdList = Array.from(this.messageMap.keys());
				if (this.$refs.chat) {
					(this.$refs.chat as HTMLElement).scrollTop = (this.$refs
						.chat as HTMLElement).scrollHeight;
				}
			});
		this.setNewId();
		await this.syncMessage();
	}

	deleteSingleMessageFromList(messageId: string, i: number) {
		if (this.messageIdList.length - 1 === i) {
			console.log(i, this.messageIdList.length);
			this.text = '';
		}
		if (messageId) {
			this.appGunNode
				.get(`${this.currentChatName}`)
				.get('messageListData')
				.get(messageId)
				.put({ message: '' });
		}
	}
}
</script>

<style scoped lang="scss">
.chat-container {
	display: grid;
	grid-template-rows: repeat(10, 1fr);
	height: 82vh;
	row-gap: 1rem;
	max-width: 30rem;
	margin: auto;
	&__top {
		grid-row: 1 / 9;
		overflow-y: scroll;
	}
	&__bottom {
		margin: 0 1rem;
		column-gap: 1rem;
		grid-row: 9 / 11;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		align-items: center;
		&__text-field {
			grid-column: 1 / 11;
		}
		&__button {
			grid-column: 11 / 13;
		}
	}
}
</style>
