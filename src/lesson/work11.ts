/**
 * *を描画
 * @param {number} size *の最大個数
 * @param {boolean} isReverse true:*が多い順に表示, false:*が少ない順に表示
 * @return {string} *の描画
 */
export const getDrawAsterisk3 = (size: number, isReverse: boolean): string => {
  let result = '';
  for (let i = 1; i <= size; i++) {
    let drawings = '';
    let cnt = 0;
    if (isReverse) {
      /* 空白をセット */
      while(cnt < (size - i)) {
        drawings = `${drawings} `;
        cnt ++;
      }
      drawings = `${drawings}*`;
    } else {
      /* 空白をセット */
      while((size - (i-1) + cnt) !== size) {
        drawings = `${drawings} `;
        cnt ++;
      }
      drawings = `${drawings}*`;
    }
    result = `${result}${drawings}\n`;
  }
  return result;
}
