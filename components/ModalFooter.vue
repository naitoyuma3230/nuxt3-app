<template>
	<v-toolbar class="bottom-footer py-1 w-100" color="white">
		<div class="d-flex pa-5 align-center w-100">
			<v-text-field
				variant="plain"
				label="Search"
				density="compact"
			></v-text-field>
			<v-btn class="mx-1" variant="outlined" color="green">
				<v-icon left>mdi-plus</v-icon>
				Post</v-btn
			>
		</div>
	</v-toolbar>
</template>
<style scoped lang="stylus">
.bottom-footer
  position: fixed
  bottom:0
</style>
