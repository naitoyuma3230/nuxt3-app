<template>
	<div class="d-flex">
		<v-select
			variant="plain"
			prepend-inner-icon="mdi-account-search"
			:items="items.context"
			label="Search"
			density="compact"
			v-model="selectedCategory"
		></v-select>
		<v-btn class="mx-1" variant="outlined" color="blue">Search</v-btn>
		<v-btn class="mx-1" variant="outlined" color="green">
			<v-icon left>mdi-plus</v-icon>
			Post</v-btn
		>
	</div>
</template>
<script setup>
const items = [
	{
		query: "staff-side",
		context: "スタッフ",
	},
	{
		query: "patient-side",
		context: "患者さん",
	},
	{
		query: "group",
		context: "グループ",
	},
	{
		query: "other",
		context: "その他",
	},
];

let selectedCategory = ref("");
</script>
