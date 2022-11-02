<template>
	<v-card>
		<v-card-actions>
			<v-avatar
				color="grey-darken-3 mr-3"
				image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
			></v-avatar>
			<div>
				<p class="text-subtitle-2">User Name</p>
				<v-list-item-subtitle>creat at</v-list-item-subtitle>
			</div>
		</v-card-actions>
		<v-img
			src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
			class="align-end"
			gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
			height="200px"
			cover
		>
			<v-card-title class="text-white" text="image-title"></v-card-title>
		</v-img>

		<v-card-action>
			<v-spacer></v-spacer>

			<v-btn color="surface-variant" variant="text"
				><v-icon>mdi-heart</v-icon>12</v-btn
			>

			<v-btn color="surface-variant" variant="text"
				><v-icon>mdi-comment</v-icon>4</v-btn
			>
		</v-card-action>

		<v-card-text>
			Whitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday
			IslandsWhitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday
			IslandsWhitsunday Island, Whitsunday Islands
		</v-card-text>
		<ArticleCardReaction />
		<ArticleCardCommentAction />
	</v-card>
</template>
<script setup>
import ArticleCardReaction from "~/components/mypage/post/ArticleCardReaction.vue";
import ArticleCardCommentAction from "~/components/mypage/post/ArticleCardCommentAction.vue";
</script>

<style></style>
