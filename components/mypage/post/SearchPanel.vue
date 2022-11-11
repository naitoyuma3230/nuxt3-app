<template>
	<div class="d-flex">
		<v-select
			variant="plain"
			prepend-inner-icon="mdi-account-search"
			:items="items"
			item-title="word"
			item-value="searchWords"
			label="Search"
			density="compact"
			v-model="selectedCategory"
		></v-select>
		<v-btn class="mx-1" variant="outlined" color="blue" @click="search">
			Search</v-btn
		>
		<v-btn class="mx-1" variant="outlined" color="green">
			<v-icon left>mdi-plus</v-icon>
			Post</v-btn
		>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items: [
				{ searchWords: "staff-side", word: "スタッフ" },
				{ searchWords: "patient-side", word: "患者さん" },
				{ searchWords: "other-side", word: "その他" },
			],
		};
	},
	setup() {
		const selectedSearchWord = computed(() => {
			let match = category.filter((obj) => {
				obj.word === selectedWord.value;
			});
			return match;
		});

		const search = () => {
			alert(selectedSearchWord);
		};
	},
};
</script>
