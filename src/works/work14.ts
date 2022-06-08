/**
 * テキストから任意のワードを検索する
 * @param {number[]} numbers ソート対象の配列
 * @param {boolean} isDesc 降順でのソートフラグ true: 降順 false: 昇順
 * @return {number[]} 出力結果 並び替え結果
 */
export const getSort = (numbers: number[], isDesc: boolean): number[] => {
  if (isDesc) {
    /* 降順 */
    return numbers.sort((a: number, b: number) :number => {
      return (a >= b) ? -1 : 1;
    });
  } else {
    /* 昇順 */
    return numbers.sort((a: number, b: number) :number => {
      return (a >= b) ? 1 : -1;
    });
  }

}
