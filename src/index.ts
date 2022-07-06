// import '../src/introduction/';
/**
 * Type Script 入門
 */
const hello:string = 'hello';
console.log(hello);

console.log(add(1, 2));
sayHello();
console.log(sayHello());
/**
 * 関数での型注釈
 * あえて型と戻り値を書かない
 * パラメータには型注釈は必須・返り値には型推論でも問題ないが定義するとわかりやすい
 */
function add (num1: number, num2: number): number {
  return (num1 + num2);
}

/**
 * 返り値が存在しない場合はvoid型
 */
function sayHello(): void {
  console.log('Hello');
}

/**
 * 関数を保持する変数に型注釈
 *
 */
const anotherAdd: (n1: number, n2: number) => number = add;

/**
 * 無名関数
 */
const anotherAdd2: (n1: number, n2: number) => number = function add (num1: number, num2: number): number {
  return (num1 + num2);
}

/**
 * 無名関数 これでもOK
 */
const anotherAdd3 = function add (num1: number, num2: number): number {
  return (num1 + num2);
}

/**
 * アロー関数
 */
const doubleNumber: (num: number) => number = num => num * 2;


function doubleNumberVoid(num: number, cb: (num: number) => void): void {
  const doubleNum = cb(num * 2);
  console.log(num * 2);
};

doubleNumberVoid(10, doubleNum => { return doubleNum });

let unknownInput: unknown;
let anyInput: any;
let text: string;

unknownInput = 'hello';
anyInput = 21;
unknownInput = 21;
unknownInput = true;
text = anyInput;

/* 型チェックで型注釈を保証 */
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

/**
 * never 決して何も返さない
 * @param message
 */
const error = (message: string): never => {
  throw new Error(message);
  /* これもOK！ */
  // while(true) {
  // }
};
console.log(error('This is an Error!!'));
