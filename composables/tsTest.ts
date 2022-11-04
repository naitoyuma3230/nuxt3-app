/* 
・TSの型宣言記法
Genericsは抽象的な型引数を使用し実際に利用されるまで型が確定しないクラス・関数・インターフェイス実現する
*/

/*・簡単な関数を使用した例*/

// 関数名 (引数型):返値型 {}
//

// number型の引数、返値を取る関数testを宣言
function test(arg: number): number {
	return arg;
}

// string型の引数、返値を取る関数test2を宣言
function test2(arg: string): string {
	return arg;
}

// 同じロジックで引数が異なる関数をジェネリクスを使用して表現
// 抽象的な型引数<T>
function test3<T>(arg: T): T {
	return arg;
}
// 定義した関数の使用時にジェネリクスに指定する型を宣言
test3<number>(1); //=> 1
test3<string>("文字列"); //=> 文字列

// この場合、関数が使用される時に

/*・クラスを実装する例*/

// コンストラクタに渡すクラス引数をジェネリクス型<T>で宣言
class Test<T> {
	// クラスプロパティ(let const使用しない)
	item: T;

	// <T>型の引数itemをプロパティの初期値に設定
	constructor(item: T) {
		this.item = item;
	}

	// クラスメソッド（function 付けない）
	getItem(): T {
		return this.item;
	}
}

// クラス引数<string>を宣言してインスタンス化
// クラスメソッドの返値型<T>もそれに準じる
let strObj = new Test<string>("文字列１");
strObj.getItem(); //=> "文字列１"

// クラス引数<number>を宣言してインスタンス化
let numObj = new Test<number>(5);
numObj.getItem(); //=> 5
