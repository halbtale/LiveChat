<template>
	<div>
		<div class="header">
			<h2 class="header__title" @click="$router.push({ name: 'ChatList' })">
				LiveChat
			</h2>
		</div>
		<div class="container__chatname" v-if="subtitle">
			<span class="container__chatname__title">
				{{ subtitle }}
			</span>
		</div>
	</div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
@Options({
	name: 'Header'
})
export default class Header extends Vue {
	@Prop()
	subtitle: string;
}
</script>
<style scoped lang="scss">
.header {
	background-color: var(--color-dark);
	color: var(--color-light);
	display: grid;
	place-content: center;
	text-align: center;
	height: 10vh;
	&__title {
		cursor: pointer;
		color: #fff;
		//color:var(--color-rose-gold)
	}
}
.container__chatname {
	flex-direction: column;
	background-color: var(--color-lighter);
	display: flex;
	justify-content: center;
	place-content: center;
	align-items: center;
	text-align: center;
	height: 6vh;
	&__title {
		color: var(--color-dark);
	}
	& > img {
		width: 2rem;
		//margin-right:2rem;
		height: 2rem;
	}
}
</style>
