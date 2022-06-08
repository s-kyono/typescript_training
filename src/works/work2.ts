/**
 * 時間帯によって挨拶を返す関数
 * @return {string} 文字列
 */
export function getHelloWithDate():string {
  const nowTime = new Date();
  const nowHour = nowTime.getHours();
  // const nowMin = nowTime.getMinutes();
  // const nowSec =  nowTime.getSeconds();
  if (nowHour > 18 || nowHour == 24 || nowHour == 0) {
    return 'こんばんは';
  }
  if (nowHour > 11 || nowHour == 18) {
    return 'こんにちは';
  }
  if (nowHour > 4 || nowHour == 11) {
    return 'おはようございます';
  }
  if (nowHour > 0 || nowHour == 4) {
    return '夜更かしさん';
  }
  else {
    return '時間を操るもの';
  }
}
