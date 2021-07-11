<template>
	<div class="container__logo">
		<img src="../../public/Livechat.jpeg" alt="LiveChat"  />
	</div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
@Options({ name: 'AppLogo' })
export default class AppLogo extends Vue {}
</script>
<style lang="scss">
.container__logo {
	& > img {
		position: relative;
		width: 10rem;
		height: 10rem;
	}
}
</style>
