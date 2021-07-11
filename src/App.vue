<template>
	<Header />
	<router-view />
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { StoreSystem } from '@/systems/StoreSystem';
import { LocalStorageSystem } from './systems/LocalStorageSystem';
export default class App extends Vue {
	created() {
		const data = LocalStorageSystem.getItem('chatNameArray');
		if (!data) {
			return null;
		}
		data.forEach((chat) => {
			StoreSystem.state.userState.chatNameArray.push(chat);
		});
	}
}
</script>
