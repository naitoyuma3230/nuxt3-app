<script setup lang="ts">
// "/composables"内のtsファイルはimportなしで各コンポーネント内で使用可能

// useSharedCounterのreturnオブジェクトを分割代入
const { counter2, inc, dec } = useSharedCounter();
onMounted(() => {
	console.log(counter2.value);
});
</script>

<template>
	<div>
		カウンター: {{ counter2 }}
		<button @click="inc">+</button>
		<button @click="dec">-</button>
	</div>
</template>
