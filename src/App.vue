<template>
	<router-view />
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { StoreSystem } from '@/systems/StoreSystem';
import { LocalStorageSystem } from './systems/LocalStorageSystem';
export default class App extends Vue {
	created() {
		const username = LocalStorageSystem.getItem('username');
		StoreSystem.state.userState.username = username;

		const chatNameArray = LocalStorageSystem.getItem('chatNameArray');
		chatNameArray?.forEach((chat) => {
			StoreSystem.state.userState.chatNameArray.add(chat);
		});
	}
}
</script>
