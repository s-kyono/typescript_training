/**
 * *を描画
 * @param {number} size *の最大個数
 * @param {boolean} isReverse true:*が多い順に表示, false:*が少ない順に表示
 * @return {string} *の描画
 */
export const getDrawAsterisk2 = (size: number, isReverse: boolean): string => {
  let result = '';
  for (let i = 1; i <= size; i++) {
    let cnt = 0;
    let drawings = '';
    if (isReverse) {
      /* 空白をセット */
      while((size - (cnt + 1)) !== (size -i)) {
        cnt ++;
        drawings = `${drawings} `;
      }
      // /* *をセット */
      while (cnt !== size) {
        cnt ++;
        drawings = `${drawings}*`;
      }
    } else {
      /* 空白をセット */
      while (cnt < (size -i)) {
        drawings = `${drawings} `;
        cnt ++;
      }
      /* *をセット */
      while (cnt !== size) {
        drawings = `${drawings}*`;
        cnt ++;
      }
    }
    result = `${result}${drawings}\n`;
  }
  return result;
}
