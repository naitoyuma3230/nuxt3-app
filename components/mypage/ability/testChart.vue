<script lang="ts">
import { defineComponent, h, PropType } from "vue";

import { Line, Bar } from "vue-chartjs";
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	CategoryScale,
	Plugin,
} from "chart.js";

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	CategoryScale
);

export default defineComponent({
	name: "LineChart",
	components: {
		Line,
		Bar,
	},
	props: {
		chartId: {
			type: String,
			default: "line-chart",
		},
		width: {
			type: Number,
			default: 400,
		},
		height: {
			type: Number,
			default: 400,
		},
		cssClasses: {
			default: "",
			type: String,
		},
		styles: {
			type: Object as PropType<Partial<CSSStyleDeclaration>>,
			default: () => {},
		},
		plugins: {
			type: Array as PropType<Plugin<"line">[]>,
			default: () => [],
		},
	},
	setup(props) {
		const chartData = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
				{
					label: "Data One",
					backgroundColor: "red",
					data: [40, 39, 10, 40, 39, 80, 40],
				},
				{
					label: "Data two",
					backgroundColor: "blue",
					data: [60, 20, 36, 46, 65, 92, 128],
				},
				{
					label: "Data three",
					backgroundColor: "green",
					data: [38, 12, 58, 8, 36, 112, 98],
				},
			],
		};

		const chartOptions = {
			responsive: true,
			maintainAspectRatio: false,
		};

		return () =>
			h(Line, {
				chartData,
				chartOptions,
				chartId: props.chartId,
				width: props.width,
				height: props.height,
				cssClasses: props.cssClasses,
				styles: props.styles,
				plugins: props.plugins,
			});
	},
});
</script>
