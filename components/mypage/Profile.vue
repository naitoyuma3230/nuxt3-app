<template>
	<v-card class="mx-auto">
		<v-card-actions>
			<div class="w-100 d-flex">
				<div class="align-self-center">
					<v-avatar color="grey-darken-3" size="4rem">
						<v-icon size="3rem" icon="mdi-account-circle"></v-icon>
					</v-avatar>
				</div>

				<div class="align-self-start mx-3">
					<v-list-item-title class="my-1">User Name</v-list-item-title>
					<v-list-item-subtitle>User Category</v-list-item-subtitle>
					<v-list-item-subtitle>User any infomation</v-list-item-subtitle>
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
		<v-card-text>
			Turns out semicolon-less style is easier and safer in TS because most
			gotcha edge cases are type invalid as well.Turns out semicolon-less
		</v-card-text>
	</v-card>
</template>
