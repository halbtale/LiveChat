<template>
	<div class="set-username-container">
		<AppInput label="What is your username?" />
	</div>
</template>

<script lang="ts">
import { StoreSystem } from '@/systems/StoreSystem';
import { Options, Vue } from 'vue-class-component';
@Options({
	name: 'SetUsername'
})
export default class SetUsername extends Vue {
	get userState() {
		return StoreSystem.state.userState;
	}
}
</script>

<style scoped lang="scss">
.set-username-container {
	display: grid;
	place-content: center;
	height: 90vh;
}
</style>
