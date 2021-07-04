<template>
	<div class="app-add-button" @click="$emit('click')">
		<icon icon="plus" />
	</div>
</template>

<style scoped lang="scss">
.app-add-button {
	background-color: var(--color-accent);
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
