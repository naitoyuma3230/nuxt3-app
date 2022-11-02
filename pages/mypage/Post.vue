<template>
	<div>
		<SearchPanel />
		<v-row>
			<v-col cols="12" sm="6" md="4">
				<ArticleCard />
			</v-col>
			<v-col cols="12" sm="6" md="4">
				<ArticleCard />
			</v-col>
			<v-col cols="12" sm="6" md="4">
				<ArticleCard />
			</v-col>
		</v-row>
	</div>
</template>
<script setup>
import SearchPanel from "~/components/mypage/post/SearchPanel.vue";
import ArticleCard from "~/components/mypage/post/ArticleCard.vue";
</script>
