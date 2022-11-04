<template>
	<div>
		<SearchPanel />
		<v-row>
			<v-col cols="12" sm="6" md="4" v-for="(item, i) in reportList" :key="i">
				<ArticleCard :post="item" />
			</v-col>
		</v-row>
	</div>
</template>
<script setup>
import SearchPanel from "~/components/mypage/post/SearchPanel.vue";
import ArticleCard from "~/components/mypage/post/ArticleCard.vue";
const { data: reportList } = await useFetch("http://localhost:3000/reportList");
</script>
