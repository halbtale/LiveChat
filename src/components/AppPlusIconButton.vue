<template>
	<div class="app-plus-button" @click="$emit('click')">
		<!--<icon icon="paper-plane" />-->
		<icon icon="plus" />
	</div>
</template>

<style scoped lang="scss">
.app-plus-button {
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
</style>