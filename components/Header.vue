<template>
	<v-toolbar density="compact">
		<v-btn icon>
			<v-icon>mdi-menu</v-icon>
		</v-btn>

		<v-spacer></v-spacer>

		<v-btn>
			<v-icon>mdi-login-variant</v-icon>
			LOGIN
		</v-btn>

		<v-btn v-if="false">
			<v-icon>mdi-logout-variant</v-icon>
			LOGOUT
		</v-btn>
	</v-toolbar>
</template>

<script lang="ts"></script>
