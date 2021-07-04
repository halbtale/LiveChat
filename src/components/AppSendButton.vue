<template>
	<div class="app-send-button" @click="$emit('click')">
		<icon icon="paper-plane" />
	</div>
</template>

<style scoped lang="scss">
.app-send-button {
	background-color: var(--color-accent-dark);
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	display: grid;
	place-content: center;
	color: var(--color-light);
	font-size: 4em;

	svg {
		width: 1.5rem;
		height: 1.5rem;
	}
}
</style>
