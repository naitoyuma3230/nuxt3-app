<template>
	<div>MicroCMSブログ</div>
	<v-row>
		<v-col
			cols="12"
			sm="6"
			v-for="blogItem in BlogList.contents"
			:key="blogItem.id"
		>
			<v-card class="mx-auto" max-width="344">
				<v-img :src="blogItem.catchimg.url" height="200px" cover></v-img>
				<v-card-title> {{ blogItem.title }} </v-card-title>

				<v-card-subtitle> {{ blogItem.createAt }} </v-card-subtitle>

				<v-card-text>
					{{ blogItem.discription }}
				</v-card-text>

				<v-card-actions>
					<v-btn
						color="orange"
						variant="text"
						:to="`/microcmsItem/${blogItem.id}`"
					>
						記事詳細
					</v-btn>

					<v-spacer></v-spacer>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>
</template>
<script setup>
const { data: BlogList } = await useFetch("/blog", {
	baseURL: "https://llxi2ry41r.microcms.io/api/v1",
	headers: {
		"X-MICROCMS-API-KEY": "585879871bc84a3fb0d272589711857d421e",
	},
});
</script>
