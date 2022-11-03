<template>
	<div class="table-card">
		<p>IN/OUT</p>
		<div class="table-box">
			<table>
				<thead>
					<tr>
						<th>日付</th>
						<th
							v-for="item in inOutList"
							:key="item.date"
							:colspan="item.meal.length"
						>
							{{ item.date }}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>時間</th>
						<template v-for="item in inOutList" :key="item.date">
							<td v-for="meal in item.meal" :key="meal.time">
								{{ meal.time }}
							</td>
						</template>
					</tr>
					<tr>
						<th>主食(割)</th>
						<template v-for="item in inOutList" :key="item.date">
							<td v-for="meal in item.meal" :key="meal.time">
								{{ meal.staple }}
							</td>
						</template>
					</tr>
					<tr>
						<th>副食(割)</th>
						<template v-for="item in inOutList" :key="item.date">
							<td v-for="meal in item.meal" :key="meal.time">
								{{ meal.side }}
							</td>
						</template>
					</tr>
					<tr>
						<th>水分・点滴<br />（総量）</th>
						<td
							v-for="item in inOutList"
							:key="item.date"
							:colspan="item.meal.length"
						>
							{{ item.water }}
						</td>
					</tr>
					<tr>
						<th>排尿<br />（総量/回数）</th>
						<td
							v-for="item in inOutList"
							:key="item.date"
							:colspan="item.meal.length"
						>
							{{ item.urination }}
						</td>
					</tr>
					<tr>
						<th>排便回数</th>
						<td
							v-for="item in inOutList"
							:key="item.date"
							:colspan="item.meal.length"
						>
							{{ item.defecation }}
						</td>
					</tr>
					<tr>
						<th>IN-OUT</th>
						<td
							v-for="item in inOutList"
							:key="item.date"
							:colspan="item.meal.length"
						>
							{{ item.inOut }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script lang="ts">
export default {
	setup() {
		const inOutList = [
			{
				date: "2022年9月26日",
				meal: [
					{
						time: "07:30",
						staple: 10,
						side: 10,
					},
					{
						time: "12:00",
						staple: 10,
						side: 8,
					},
					{
						time: "18:30",
						staple: 10,
						side: 7,
					},
				],
				water: "950cc",
				urination: "650cc/3",
				defecation: 3,
				inOut: "+300",
			},
			{
				date: "2022年9月27日",
				meal: [
					{
						time: "07:30",
						staple: 10,
						side: 10,
					},
					{
						time: "12:00",
						staple: 10,
						side: 8,
					},
					{
						time: "18:30",
						staple: 10,
						side: 7,
					},
				],
				water: "950cc",
				urination: "650cc/3",
				defecation: 3,
				inOut: "+300",
			},
			{
				date: "2022年9月28日",
				meal: [
					{
						time: "07:30",
						staple: 10,
						side: 10,
					},
					{
						time: "12:00",
						staple: 10,
						side: 8,
					},
					{
						time: "18:30",
						staple: 10,
						side: 7,
					},
				],
				water: "950cc",
				urination: "650cc/3",
				defecation: 3,
				inOut: "+300",
			},
		];
		return { inOutList };
	},
};
</script>
<style scoped lang="stylus">
.table-card
  background: #fff
  padding: 10px 15px
  overflow: hidden
  margin: 10px 0 60px 0
  .table-box
    overflow-x: scroll
    margin-top: 10px
    table
      border-spacing: 0
      text-align: center
      table-layout: fixed
      th
        padding: 5px 8px
        background: #e1f8ff
        border: 1px solid #dfdfdf
        &:first-child
          position: sticky
          left: 0
          display: inline-block
          width: 120px
      td
        padding: 5px 8px
        border: 1px solid #dfdfdf
</style>
