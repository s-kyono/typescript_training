/**
 * 0から100までを表示する。5の倍数ごとに改行する。
 * @return {void} 返り値空
 */
export function showHundred2():void {
  let cnt = 0;
  let result = '';
  while (cnt < 100) {
    if (cnt !== 0 && (cnt % 5) == 0) {
      result = result + cnt.toString();
      result = result + '\n';
    } else {
      result = result + cnt.toString() + ' ';
    }
    cnt ++;
  }
  result = result + cnt.toString();
  console.log(result);
}
