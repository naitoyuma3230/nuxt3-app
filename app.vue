<template>
	<NuxtLayout>
		<NuxtPage :key="$route.fullPath" />
	</NuxtLayout>
</template>

<style lang="stylus">
@import '~/assets/css/normalize.css'
@import '~/assets/css/style.css'

*
  box-sizing: border-box

body
  font: 14px/1.5 'MS Ｐゴシック', sans-serif
  color: #333

p
  margin: 0
  padding: 0

a
  text-decoration: none
  color: #4682c9
</style>
