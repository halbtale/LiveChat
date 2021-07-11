<template>
	<button class="app-button" @click="$emit('click')">
		<span><slot></slot></span>
	</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
	name: 'AppButton',
	emits: ['click']
})
export default class AppButton extends Vue {}
</script>

<style scoped lang="scss">
.app-button {
	background-color:var(--color-primary);
	border-radius: 2rem;
	width: 100%;
	border: none;
	height: 3rem;
	cursor: pointer;
	& > span {
		color: var(--color-light);
	}
	&:hover {
		box-shadow: 1px 0px 10px 3px var(--color-primary);
	}
}
</style>
