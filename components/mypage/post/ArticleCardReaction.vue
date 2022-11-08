<template>
	<v-card-actions>
		<v-avatar
			color="grey-darken-3 mr-3 mb-auto"
			image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
		></v-avatar>
		<div class="w-100 pa-0">
			<p class="text-subtitle-2 d-inline mr-5">{{ commentItem.staffName }}</p>
			<p class="text-caption d-inline text-center font-weight-thin">
				2021/12/11
			</p>
			<v-list-item-subtitle>{{ commentItem.content }}</v-list-item-subtitle>
			<div class="pa-0 d-flex">
				<v-spacer></v-spacer>
				<v-btn color="surface-variant" variant="text"
					><v-icon>mdi-heart</v-icon>12</v-btn
				>
				<v-btn color="surface-variant" variant="text"
					><v-icon>mdi-comment</v-icon>12</v-btn
				>
			</div>
		</div>
	</v-card-actions>
</template>
<script>
export default {
	props: {
		commentItem: Object,
	},
};
</script>
<style scoped></style>
