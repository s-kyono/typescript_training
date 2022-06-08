/**
 * *を描画
 * @param {number} size *の最大個数
 * @param {boolean} isReverse true:*が多い順に表示, false:*が少ない順に表示
 * @return {string} *の描画
 */
export const getDrawAsterisk1 = (size: number, isReverse: boolean): string => {
  let result = '';
  for (let i = 1; i <= size; i++) {
    let cnt = 1;
    let drawings = '';
    if (isReverse) {
      while (cnt <= (size - (i - 1))) {
        drawings = `${drawings}*`;
        cnt ++;
      }
    } else {
      while (cnt <= i) {
        drawings = `${drawings}*`;
        cnt ++;
      }
    }
    result = `${result}${drawings}\n`;
  }
  return result;
}
