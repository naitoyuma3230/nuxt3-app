import type { Ref } from "vue";

/* 
composition apiでは Ref はVue側で定義されたリアクティブな変数を持つクラスで
おそらく、クラス引数<T>が定義され、コンストラクタでリアクティブな<T>型の変数として返す設定になっている

→ この仕組みを使用する事でcomponentの各種オプションのリアクティブな値を扱うメソッドについて
ロジックを別ファイルに切り分け、再利用可能な形で呼び出せるようになった。
*/

/* 
この場合、Refクラスを<number>型引数でインスタンス化し
リアクティブなnumber型の返値を型として引数の型に指定している
*/
export const inc = (counter: Ref<number>) => () => counter.value++;
export const dec = (counter: Ref<number>) => () => counter.value--;

/*
  componentのリアクティブな変数を使用するメソッドはComposition Functionと呼ばれる
*/
export const useSharedCounter = () => {
	/* 
    上記2つのメソッドに型宣言通りリアクティブな値を引数として渡す事で
    Composition Functionとして機能する
	*/

	// ref()は変数にリアクティブな機能を付加するVueのメソッド
	const counter = ref(0);

	/* 
    useStateを使用する事でglobalな変数として(厳密には変数を返すメソッド)counter2をkeyとして登録or呼び出し
    インスタンス化したcounter2のvalueを値として扱える
		また例えばこの関数の返値オブジェクトを2つのコンポーネントで使用した場合、Composition Functionにより
		counter2というグローバルな状態を管理するロジックとなる
	*/
	const counter2 = useState("counter2", () => 0);
	return {
		// counter2をreadonlyに設定し直接アクセスしない
		// アクセスはuseSharedCounter内でcounter2を引数に指定したメソッドのみ
		counter2: readonly(counter2),
		dec: dec(counter2),
		inc: inc(counter2),
	};
};

/*
	・useStateとComposition APIを使用したGlobalな状態管理の方法

	状態管理を行うための関数を定義しその中でuseStateで宣言したglobalなリアクティブ関数を宣言、安全のためreadonlyに設定する。
	同じくリアクティブな値を扱うメソッドを関数で呼び出し、globalな変数をメソッドの引数に設定する
	状態管理メソッドの呼び出しは分割代入を使用し、各変数、メソッドをsetup内で宣言する
*/
