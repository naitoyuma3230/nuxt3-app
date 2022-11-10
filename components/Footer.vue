<template>
	<v-toolbar class="bottom-footer w-100">
		<v-btn v-for="item in menuList" :key="item.to" :to="item.to">{{
			item.title
		}}</v-btn>
	</v-toolbar>
</template>
<script setup>
const menuList = [
	{
		title: "mypage",
		to: "/mypage",
	},
	{
		title: "MicroCMS",
		to: "/microcms",
	},
	{
		title: "home",
		to: "/",
	},
	{
		title: "usestate",
		to: "/usestate",
	},
	{
		title: "compositionapi",
		to: "/compositionapi",
	},
];
</script>

<style scoped lang="stylus">
.bottom-footer
  position: fixed
  bottom:0
</style>
