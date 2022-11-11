<template>
	<Header />
	<p>{{ filterReport }}</p>
	<v-row class="pa-5">
		<v-col cols="2" class="mx-0 px-0 d-flex align-center">
			<v-btn variant="text" size="large">
				<v-icon color="blue" size="large" icon="mdi-thumb-up"></v-icon>
			</v-btn>
		</v-col>
		<v-col cols="2" class="mx-1 px-0" v-for="report in reportList">
			<v-img :src="report.staffImg" v-if="report.reportId === reportId"></v-img>
		</v-col>
	</v-row>
	<div v-for="report in reportList">
		<div
			v-for="comment in report.commentList"
			class="card-bottom"
			v-if="report.reportId === reportId"
		>
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

const { data: reportList } = await useFetch("http://localhost:3001/reportList");
const route = useRoute();
const reportId = route.params.id;

// fetchしてきたデータにfilterが使用できない
// const filterReport = computed(() => {
// 	const filterReport = reportList.value.filter((report) => {
// 		report.reportId === reportId;
// 	});
// 	return filterReport;
// });
</script>
<style lang="stylus" scoped>
.card-bottom{
	border-bottom: 1px dotted #ccc
}
</style>
