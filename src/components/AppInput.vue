<template>
	<div class="text-field-box">
		<input
			:class="`text-field text-field--${backgroundColor}`"
			v-model="value"
			:placeholder="label"
			@keypress.enter="$emit('submit')"
			@input="$emit('input')"
			v-autofocus
		/>
	</div>
</template>

<script lang="ts">
import { Model, Prop } from 'vue-property-decorator';
import { Options, Vue } from 'vue-class-component';

@Options({
	name: 'AppInput',
	emits: ['submit', 'input']
})
export default class AppInput extends Vue {
	@Model('modelValue')
	value: string;

	@Prop()
	label: string;

	@Prop({ default: 'primary' })
	backgroundColor: string;
}
</script>

<style scoped lang="scss">
.text-field-box {
	margin: 0.6rem 0;
}
.text-field {
	height: 3rem;
	width: 100%;
	outline: none;
	color: var(--color-lightest);
	padding: 0.8em 1em;
	border: 1px solid black;
	border-radius: 10px;

	&::placeholder {
		color: var(--color-light);
		font-weight: lighter;
		font-size: 1rem;
	}

	&:hover {
		box-shadow: 1px 0px 10px 3px var(--color-dark);
	}

	&--primary {
		background-color: var(--color-dark);
	}

	&--accent {
		background-color: var(--color-dark);
	}
}
</style>
