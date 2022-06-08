/**
 * 配列を任意の倍数にする
 * @param {number[]} numbers 対象データの配列
 * @param {number} multiple 倍数
 * @return {number[]} 出力結果 multipleの値を掛けたnumbersの結果
 */
export const getMultiple = (numbers: number[], multiple: number): number[] => {
  const result = [];
  numbers.forEach((number) => {
    result.push(number * multiple);
  });
  console.log(result);
  return result;
}
