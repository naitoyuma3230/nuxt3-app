<template>
	<v-card class="mx-auto">
		<v-card-actions>
			<div class="w-100 d-flex">
				<div class="align-self-center">
					<v-avatar size="4rem" :image="loginUser.userImg">
						<!-- <v-icon size="3rem" icon="mdi-account-circle"></v-icon> -->
					</v-avatar>
				</div>

				<div class="align-self-start mx-3">
					<v-list-item-title class="my-1">
						{{ loginUser.userName }}
					</v-list-item-title>
					<v-list-item-subtitle>{{ loginUser.userId }}</v-list-item-subtitle>
					<v-list-item-subtitle>User Category</v-list-item-subtitle>
				</div>
				<v-spacer></v-spacer>
				<div class="justify-self-end align-self-center">
					<v-icon class="mr-1" icon="mdi-heart"></v-icon>
					<span class="subheading mr-2">256</span>
					<span class="mr-1"></span>
					<v-icon class="mr-1" icon="mdi-share-variant"></v-icon>
					<span class="subheading">45</span>
				</div>
			</div>
		</v-card-actions>
		<v-card-text class="subheading"> {{ loginUser.userDesc }} </v-card-text>
	</v-card>
</template>
<script setup>
// dataはrefによりリアクティブに使用できる変数で変数名を指定したい場合{data:変数名}とする
// useFetchの呼び出しはsetup内のみ
const { data: loginUser } = await useFetch("http://localhost:3000/loginUser");
</script>
