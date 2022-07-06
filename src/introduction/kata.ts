/* TypeScript javascript の型はこう使うんだ！ */


/**
 * 型注釈・型推論
 * 型推論を主に使っていき、型推論できない場合は型注釈を利用する
 */

/* tsc 静的型付け */
const TypeScript: any = {};

/* javascriptエンジン 動的型付け */
const Javascript: any = {};


/* boolean */
const hasValue: boolean = true;

/* number */
const count: number = 10;
const float: number = 3.14;
const negative: number = -0.12;

/* string */
const single: string = 'single';
const double: string = "double";
const  back: string = `back`;

/* Object型 */
const person: {
  name: {
    first: string,
    last: string,
  },
  age: number,
} = {
  name: {
    first: 'jack',
    last: 'queen',
  },
  age: 21
};

/* Array */
const fruits: string[] = ['Apple', 'Banana', 'Grape'];
/* Array 複数型 */
const fruits1: (string|number)[] = ['Apple', 'Banana', 'Grape', 1];
const fruit = fruits[0];
console.log(fruit.indexOf('apple'));
/* Object型 使うことがない */
const personObject: object = {
  name: 'Jack',
  age: 21
};

/* タプル型 ※明示的に型注釈する 配列を厳しくした場合*/
const book: [string, number, boolean] = ['business', 1500, false];

/* enum 特定のまとまったグループを許容する enumは基本パスカルケース */
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
};

/* ENum 列挙型 */
const coffee = {
  hot: true, /* true 暑い ｜false 冷たい */
  size: CoffeeSize.SHORT,
};
coffee.size = CoffeeSize.TALL;

/* any型 基本は使用しない */
let anything: any;
anything = 'test';
anything = 1;
anything = ['hello', 33, true];

let anythingArray: any[];
anythingArray = ['hello', 33, true];

/* stringも上書きできてしまう */
let banana: string = 'banana';
banana = anything;


/* union型 型注釈を複数利用する場合 */
let unionType: (number | string) = 10;
let unionTypes: (number | string)[] = [10, 'test'];
// unionType.toUpperType();
unionType = 'hello';
unionType.toUpperCase();

/* Literal型 決まった値のみを型注釈する */
const apple: 'apple' = 'apple';
const zero: 0 = 0;
const boolean1: true = true;

/* Array型とLiteral型を合体することもできる */
const clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {color: string, size: 'small' | 'medium' | 'large'} = {
  color: 'white',
  size: 'medium'
};
cloth.size = 'large';

/* エイリアス Literal Enum 型注釈を定義できる */
type ClothSize = 'small' | 'medium' | 'large';
const cloth1: {
  color: string,
  size: ClothSize,
} = {
  color: 'red',
  size: 'large',
};
