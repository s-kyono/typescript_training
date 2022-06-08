const CalcType: any = {
  Add: 'Add',
  Sub: 'Sub',
  Multi: 'Multi',
  Div: 'Div',
}
/**
 * 演算関数
 */
export function getCalculation() {
  const a: number = 10;
  const b: number = 2;
  console.log(CalcType.Add, calc(a, b, CalcType.Add));
  console.log(CalcType.Add, calc(a, b, CalcType.Sub));
  console.log(CalcType.Add, calc(a, b, CalcType.Multi));
  console.log(CalcType.Add, calc(a, b, CalcType.Div));
  console.log('なし', calc(a, b, ''));
}

/**
 * 列挙型の計算結果を返す
 * @param {number} a 数値a
 * @param {number} b 数値b
 * @param {string} calcType 計算種別
 * @return {number} 計算結果
 */
const calc = (a:number, b:number, calcType:string): number => {
  if (calcType == CalcType.Add) {
    return a + b;
  }
  if (calcType == CalcType.Sub) {
    return a - b;
  }
  if (calcType == CalcType.Multi) {
    return a * b;
  }
  if (calcType == CalcType.Div) {
    return a / b;
  } else {
    return 0;
  }
};
