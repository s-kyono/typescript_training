
let counter = 0;
/**
 * カウンター増加
 */
const  countUp = () => {
  counter ++;
  console.log(`経過時間：${counter}`);
};

/**
 * タイマーカウンター
 * @param {number} num カウント数
 */
export const intervalTimer = (num: number) => {

  const intervalId = setInterval(() => {
    countUp();
    if (counter >= num) {
      clearInterval(intervalId); //intervalIdをclearIntervalで指定している
      console.log('タイマー終了');
    }
  }, 1000);
}
