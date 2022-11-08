<template>
	<Header />
	<v-row class="pa-5">
		<v-col cols="2" class="mx-0 px-0 d-flex align-center">
			<v-btn variant="text" size="large">
				<v-icon color="blue" size="large" icon="mdi-thumb-up"></v-icon>
			</v-btn>
		</v-col>
		<v-col cols="2" class="mx-1 px-0" v-for="img in reportList">
			<v-img :src="img.staffImg"></v-img>
		</v-col>
	</v-row>
	<div v-for="report in reportList">
		<div v-for="comment in report.commentList" class="card-bottom">
			<ArticleCardReaction :commentItem="comment" />
		</div>
		<ModalFooter />
	</div>
</template>
<script setup>
import ArticleCardReaction from "~/components/mypage/post/ArticleCardReaction.vue";
definePageMeta({
	layout: false,
});
// reportList.commentList
const { data: reportList } = await useFetch("http://localhost:3001/reportList");
</script>
<style lang="stylus" scoped>
.card-bottom{
	border-bottom: 1px dotted #ccc
}
</style>
