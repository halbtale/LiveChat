<template>
	<div class="chat-message" :class="[position]"><slot></slot></div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Options, Vue } from 'vue-class-component';

@Options({
	name: 'AppChatMessage',
	components: {}
})
export default class AppChatMessage extends Vue {
	@Prop()
	position: string;
}
</script>

<style scoped lang="scss">
.chat-message {
	width: 70%;
	height: auto;
	min-height: 100%;

	background-color: var(--color-violett);
	color: var(--color-light);
	//color: var(--color-dark);
	margin: 1rem 1rem;
	padding: 1rem 1rem;
	border-radius: 10px;

	&.left {
		background-color: var(--color-violett);
		margin-right: 6rem;
	}

	&.right {
		background-color: #fff;
		margin-left: 6rem;
	}
}
</style>
