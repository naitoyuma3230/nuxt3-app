<template>
	<h3>CompositionAPI</h3>
	<div>{{ reactiveText }}</div>
	<v-btn @click="onClick">click</v-btn>
	<v-btn @click="onClick2">onClick2</v-btn>
	<br />
	<br />
	<p>{{ obj.a }} : {{ obj.b }}</p>
	<v-btn @click="incrementA">addA</v-btn>
	<v-btn @click="incrementB">addB</v-btn>
	<v-btn @click="reset">reset</v-btn>
	<br />
	<p>Num:{{ number }}</p>
	<p>ComputedNum:{{ doubleNumber }}</p>
	<v-btn @click="displayNumber">表示</v-btn>
	<br />
	<p>defaultNum:{{ compNum }}</p>
	<p>setterNum:{{ setterNum }}</p>
	<p>ComputedNumber:{{ doublecompNum }}</p>
	<v-btn @click="compNumadd">add-default</v-btn>
	<br />
	<p>watchNum:{{ watchNum }}</p>
	<v-btn @click="addWatchNum">addWatchNum</v-btn>
	<div ref="elm">ref Hello World!!</div>
</template>
<script setup>
/* <script setup>直下に定義したすべての処理がbeforeCreateとcreatedに該当 */

// text固定値
const text = "Hello World!!";
const onClick = () => {
	alert(text);
};

// refによるリアクティブ
// .valueでアクセス
let reactiveText = ref("Hello Reactive World!");
const onClick2 = () => {
	alert(reactiveText.value);
};
// reactiveによるリアクティブ化ではアクセスが直観的
let obj = reactive({ a: 3, b: 5 });
const incrementA = () => obj.a++;
const incrementB = () => obj.b++;
// 値の直接代入はObject.assign()を使用
const reset = () => Object.assign(obj, { a: 0, b: 0 });

const number = ref(1);
const doubleNumber = computed(() => number.value * 2);

const displayNumber = () => {
	alert(`num:${number.value}, compNum:${doubleNumber.value}`);
};

// propsを受け取る
const props = defineProps({
	hoge: {
		type: String,
		default: "text",
	},
	fuga: {
		type: Number,
		required: true,
		validator: (v) => v > 0,
	},
});

// computed
const compNum = ref(1);
const setterNum = ref(4);
// get
const doublecompNum = computed({
	get: () => {
		return compNum.value * 2;
	},
	set: (val) => {
		setterNum.value = val * 4;
	},
});
const compNumadd = () => {
	compNum.value++;
};

// watch
const watchNum = ref(1);
// 第一引数に監視対象、第二引数にコールバック処理（cr:変更後,prev:変更前）
watch(watchNum, (cr, prev) => {
	console.log(cr, prev);
});
const addWatchNum = () => {
	watchNum.value++;
};

// このrefは要素を参照するための宣言、リアクティブ化とは役割が違う
// Nullで初期化しているが、onMountedで呼び出された際にref=elmに指定した要素を取得する
const elm = ref(null);
onMounted(() => {
	console.log(elm.value);
});
</script>
