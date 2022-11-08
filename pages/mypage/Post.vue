<template>
	<div>
		<SearchPanel />
		<ArticleCard :post="item" />
	</div>
</template>
<script setup>
import SearchPanel from "~/components/mypage/post/SearchPanel.vue";
import ArticleCard from "~/components/mypage/post/ArticleCard.vue";
const { data: reportList } = await useFetch("http://localhost:3001/reportList");
</script>
