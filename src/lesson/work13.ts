/**
 * テキストから任意のワードを検索する
 * @param {string} text 検索対象のテキスト
 * @param {string} searchWord 検索ワード
 * @return {number} 出力結果 検索ヒット回数
 */
export const getSearchTextCount = (text: string, searchWord: string): number => {
  return( text.match( new RegExp( searchWord, "g" ) ) || [] ).length ;
}
