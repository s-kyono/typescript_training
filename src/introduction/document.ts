import axios from 'axios';
/**
 * 半強制的にドキュメントを利用できる
 * 関数の引数の型を絶対定義
 * コメントでドキュメントを記述するより信頼性が高い
 * オブジェクト型は interfaceにて定義
 * @param {number} a 数値
 * @param {number} b 数値
 * @return {number}
 */
const add = (a: number, b: number): number => {
  return (a + b);
}

/**
 * Linter機能
 * コンパイルする前に構文エラー・型定義がされているかを確認する
 * 規模が大きくなるほど重宝する機能
 * エディターと一緒に使うといいよ！
 * @param {string} test
 * @param {string} error
 * @return {string}
 */
const linter = (test: string, error: string): string => {
  return (`${test}_${error}`);
}

/**
 * ES5へのコンパイラ
 */
const es5 = () => {
}

class Car {}
