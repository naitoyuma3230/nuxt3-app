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
		name: "POST",
		icon: "mdi-tag",
		to: "post",
	},
	{
		name: "Table",
		icon: "mdi-tag",
		to: "record",
	},
	{
		name: "Chart",
		icon: "mdi-tag",
		to: "ability",
	},
	{
		name: "Info",
		icon: "mdi-tag",
		to: "biological",
	},
];
</script>
