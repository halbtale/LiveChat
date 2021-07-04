<template>
	<div class="chat-container">
		<div class="chat-container__top">
			{{allMessages}}
		<!--	<AppChatMessage position="right" v-for="(mex,i) in allMessages" :key="i">{{mex}}</AppChatMessage>-->
			<!--<AppChatMessage position="left">Ciao!</AppChatMessage>
			<AppChatMessage position="right">Ciao anche a te</AppChatMessage>
			<AppChatMessage position="right">Come stai?</AppChatMessage>
			<AppChatMessage position="left">Molto bene, tu?</AppChatMessage>
			<AppChatMessage position="right">Anche io molto bene, grazie</AppChatMessage>
			<AppChatMessage position="left">Andiamo a prendere un gelato?</AppChatMessage>
			<AppChatMessage position="left">Ho fame...</AppChatMessage>
			<AppChatMessage position="right">Sì dai</AppChatMessage>
			<AppChatMessage position="right">{{message}}</AppChatMessage>-->
		</div>
		<div class="chat-container__bottom">
			<AppInput
				class="chat-container__bottom__text-field"
				label="Message"
				v-model="text"
				backgroundColor="accent"
				
			/>
			<button @click="sendMessage">Send</button>
			<AppSendButton class="chat-container__bottom__button" @click="sendMessage"/>
		</div>
	</div>
</template>

<script lang="ts">
import { StoreSystem } from '@/systems/StoreSystem';
import { Options, Vue } from 'vue-class-component';

@Options({
	name: 'Chat'
})
export default class Chat extends Vue {
	text = '';
	allMessages =[]
	get appGunNode() {
		return this.$gun.get('livechat');
	}

	get currentChatGunNode() {
		return this.appGunNode.get(this.userState.chatName);
	}

	get userState() {
		return StoreSystem.state.userState;
	}
	sendMessage() {
		const message = this.text;
		this.$gun.get('livechat').get(`${this.currentChatGunNode}`).put({message})
		
		
	}
	get allMessage(){
		this.$gun.get('livechat').get(`${this.currentChatGunNode}`,data=>{
			this.allMessages.push(data)
		})
		return this.allMessages
	}

	created() {
		console.log(this.currentChatGunNode);
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
