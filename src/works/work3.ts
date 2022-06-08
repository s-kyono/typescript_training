/**
 * 0から100までを表示する
 * @return {void} 返り値空
 */
export function showHundred1():void {
  let cnt = 0;
  let result = '';
  while (cnt < 100) {
    result = result + cnt.toString() + ' ';
    cnt ++;
  }
  result = result + cnt.toString();
  console.log(result);
}
