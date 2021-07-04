<template>
	<div class="chat-container">
		<div class="chat-container__top" v-scroll-from-bottom>
			<AppChatMessage position="left">Ciao!</AppChatMessage>
			<AppChatMessage position="right">Ciao anche a te</AppChatMessage>
			<AppChatMessage position="right">Come stai?</AppChatMessage>
			<AppChatMessage position="left">Molto bene, tu?</AppChatMessage>
			<AppChatMessage position="right">Anche io molto bene, grazie</AppChatMessage>
			<AppChatMessage position="left">Andiamo a prendere un gelato?</AppChatMessage>
			<AppChatMessage position="left">Ho fame...</AppChatMessage>
			<AppChatMessage position="right">Sì dai</AppChatMessage>
		</div>
		<div class="chat-container__bottom">
			<AppAddButton />
		</div>
	</div>
</template>

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
		justify-content: flex-end;
		align-content: center;
	}
}
</style>
