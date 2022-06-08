/**
 *  key: valueのデータでnull以外のデータに正規化する
 *  @param {any} データ
 *  @return {any} 正規化した結果
 */
export const getNormKeyValues = (data: any): any => {
  const result = {};
  Object.keys(data).forEach((key) => {
    if (!data[key]) {
      return;
    }
    result[key] = data[key];
  });
  return result;
};
