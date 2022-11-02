<template>
	<Profile />
	<TabPanel class="my-5" />
	<NuxtPage :key="$route.fullPath" class="my-5" />
</template>

<script setup>
import Profile from "~/components/mypage/Profile.vue";
import TabPanel from "~/components/mypage/TabPanel.vue";
</script>
