<template>
	<div class="d-flex">
		<v-select
			variant="plain"
			prepend-inner-icon="mdi-account-search"
			:items="items"
			label="Search"
			density="compact"
		></v-select>
		<v-btn class="mx-1" variant="outlined" color="blue">Search</v-btn>
		<v-btn class="mx-1" variant="outlined" color="green">
			<v-icon left>mdi-plus</v-icon>
			Post</v-btn
		>
	</div>
</template>
<script setup>
const items = ["friend", "team", "group", "other"];
</script>
