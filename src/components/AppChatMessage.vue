<template>
	<div class="chat-message" :class="[position]"><slot></slot></div>
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Options, Vue } from 'vue-class-component';

@Options({
	name: 'AppInput',
	components: {}
})
export default class AppInput extends Vue {
	@Prop()
	position: string;
}
</script>

<style scoped lang="scss">
.chat-message {
	background-color: var(--color-primary);
	color: var(--color-light);
	margin: 1rem 1rem;
	padding: 1rem 1rem;
	border-radius: 10px;

	&.left {
		margin-right: 6rem;
	}

	&.right {
		margin-left: 6rem;
	}
}
</style>
