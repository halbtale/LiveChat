<template>
	<div class="text-field-box">
		<input class="text-field" v-model="value" :placeholder="label" />
	</div>
</template>

<script lang="ts">
import { Model, Prop } from 'vue-property-decorator';
import { Options, Vue } from 'vue-class-component';

@Options({
	name: 'AppInput',
	components: {}
})
export default class AppInput extends Vue {
	@Model('modelValue')
	value: string;

	@Prop()
	label: string;
}
</script>

<style scoped lang="scss">
.text-field-box {
	margin: 0.6rem 0;
}
// .text-field {
// height: 1rem;
// width: 15rem;
// outline: none;
// background-color: none;
// padding: 0.8em 1em;
// border: 1px solid black;

// &::placeholder {
// 	// color: $color-lighter-grey;
// 	font-weight: lighter;
// }

// &:focus {
// 	// border: 1px solid $color-dark-blue;
// }

// &:hover {
// 	box-shadow: 1px 0px 10px 3px rgb(236, 236, 236);
// }
// }
</style>
