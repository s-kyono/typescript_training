/**
 * テキストから任意のワードを検索する
 * @param {string} text 検索対象のテキスト
 * @param {string} searchWord 検索ワード
 * @return {boolean} 検索結果 true:存在する false: 存在しない
 */
export const isSearchText = (text: string, searchWord: string): boolean => {
  return (text.indexOf(searchWord) != -1) ? true : false;
}
