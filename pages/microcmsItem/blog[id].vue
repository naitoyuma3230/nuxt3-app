<template>
	<v-card class="mx-auto">
		<v-img :src="item.catchimg.url" height="400px" cover></v-img>
		<v-card-title> {{ item.title }} </v-card-title>

		<v-card-subtitle> {{ item.createAt }} </v-card-subtitle>

		<v-card-text>
			{{ item.body }}
		</v-card-text>

		<v-card-actions>
			<v-spacer></v-spacer>
		</v-card-actions>
	</v-card>
</template>
<script setup>
const route = useRoute();
const { data: item } = await useFetch(`/blog/${route.params.id}`, {
	baseURL: "https://llxi2ry41r.microcms.io/api/v1",
	headers: {
		"X-MICROCMS-API-KEY": "585879871bc84a3fb0d272589711857d421e",
	},
});
</script>
