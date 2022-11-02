<template>
	<div class="d-flex space-btween">
		<v-btn
			:to="'/mypage/' + item.to"
			v-for="item in itemList"
			variant="outlined"
		>
			<v-icon left>{{ item.icon }}</v-icon>
			{{ item.name }}</v-btn
		>
	</div>
</template>
<script setup lang="ts">
const itemList = [
	{
		name: "記事",
		icon: "mdi-newspaper-variant-outline",
		to: "post",
	},
	{
		name: "記録",
		icon: "mdi-muscle",
		to: "record",
	},
	{
		name: "能力",
		icon: "mdi-muscle",
		to: "ability",
	},
	{
		name: "身体情報",
		icon: "mdi-muscle",
		to: "biological",
	},
];
</script>
