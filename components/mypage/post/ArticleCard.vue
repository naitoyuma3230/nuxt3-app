<template>
	<v-row>
		<v-col cols="12" sm="12" md="6" v-for="(post, i) in reportList" :key="i">
			<v-card>
				<v-card-actions>
					<v-avatar
						color="grey-darken-3 mr-3"
						:image="post.staffImg"
					></v-avatar>
					<div>
						<p class="text-subtitle-2">{{ post.staffName }}</p>
						<v-list-item-subtitle>{{ post.time }}</v-list-item-subtitle>
					</div>
				</v-card-actions>

				<v-card-text class="pa-1">
					{{ post.contentText }}
				</v-card-text>
				<v-card-text class="pb-0">
					<v-row>
						<v-col
							class="pa-0"
							:cols="12 / post.contentImgs.length"
							v-for="imgItem in post.contentImgs"
						>
							<v-img
								width="auto"
								height="100px"
								v-if="imgItem.src"
								:src="imgItem.src"
								cover
							></v-img>
						</v-col>
					</v-row>
				</v-card-text>
				<v-card-action class="pa-1">
					<v-spacer></v-spacer>

					<v-btn color="surface-variant" variant="text"
						><v-icon>mdi-heart</v-icon>12</v-btn
					>

					<v-btn color="surface-variant" variant="text"
						><v-icon>mdi-comment</v-icon>4</v-btn
					>
				</v-card-action>
				<v-card-actions class="justify-center my-0 py-0">
					<v-btn variant="text" color="blue" class="mx-5">Good</v-btn>
					<v-btn variant="text" color="green" class="mx-5">Comment</v-btn>
				</v-card-actions>
				<ArticleCardReaction :commentItem="post.commentList[0]" />
				<v-card-subtitle
					class="text-center my-0"
					v-if="post.commentList.length > 1"
				>
					<v-btn variant="flat" :to="`/comment${post.reportId}`">
						<p>
							他に{{ post.commentList.length - 1 }}件のコメントがあります...
						</p>
					</v-btn>
					<div class="text-center">
						<v-btn
							variant="flat"
							to="/comment"
							class="my-0"
							icon="mdi-chevron-down"
						>
						</v-btn>
					</div>
				</v-card-subtitle>
			</v-card>
		</v-col>
	</v-row>
</template>
<script setup>
import ArticleCardReaction from "~/components/mypage/post/ArticleCardReaction.vue";
const { data: reportList } = await useFetch("http://localhost:3001/reportList");
</script>

<style></style>
