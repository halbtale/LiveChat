<template>
	<div>
		<div class="header">
			<h2 class="header__title" @click="$router.push({ name: 'SetChatName' })">
				LiveChat
			</h2>
		</div>
		<div class="container__chatname" v-if="currentChatName.length > 0">
			<span class="container__chatname__title">
				{{ currentChatName }}
			</span>
			<img src="../../public/img/icons/live.jpeg" alt="" />
		</div>
	</div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { StoreSystem } from '@/systems/StoreSystem';
@Options({
	name: 'Header'
})
export default class Header extends Vue {
	get currentChatName() {
		return this.userState.chatName;
	}
	get userState() {
		return StoreSystem.state.userState;
	}
}
</script>
<style scoped lang="scss">
.header {
	background-color: var(--color-dark);
	color: var(--color-light);
	display: grid;
	place-content: center;
	text-align: center;
	height: 10vh;
	&__title {
		color: #fff;
		//color:var(--color-rose-gold)
	}
}
i {
	color: red;
}
.container__chatname {
	flex-direction: column;
	background-color: white;
	color: var(--color-light);
	display: flex;
	justify-content: center;
	place-content: center;
	align-items: center;
	text-align: center;
	height: 8vh;
	&__title {
		color: var(--color-dark);
	}
	& > img {
		width: 2rem;
		//margin-right:2rem;
		height: 2rem;
	}
}
</style>
