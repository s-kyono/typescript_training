import {getHello} from './lesson/work1';
import {getHelloWithDate} from './lesson/work2';
import {showHundred1} from './lesson/work3';
import {showHundred2} from './lesson/work4';
import {mergeString} from './lesson/work5';
import {getArrayString} from './lesson/work6';
import {getCalculation} from './lesson/work7';
import {getMultiple} from './lesson/work8';
import {getDrawAsterisk1} from './lesson/work9';
import {getDrawAsterisk2} from './lesson/work10';
import {getDrawAsterisk3} from './lesson/work11';
import {isSearchText} from './lesson/work12';
import {getSearchTextCount} from './lesson/work13';
import {getSort} from './lesson/work14';
import {intervalTimer} from './lesson/work15';
import {getKeyValues} from './lesson/work16';
import {getNormKeyValues} from './lesson/work17';
import {Kobun} from './lesson/work18';
import {PhoneHuman} from './lesson/work19';
import {referenceAndCopy} from './lesson/work20';
// const inputKeyValues1 = {
//   id: '100',
//   name: 'shohei',
//   age: null,
//   birthday: '1988/10/07',
//   hobby: null,
// }
// const inputKeyValues2 = {
//   tamago: null,
//   ringo: 'apple',
//   doraemon: null,
//   banana: null,
//   gohan: null,
// }
// console.log(getHello());
// console.log(getHelloWithDate());
// showHundred1();
// showHundred2();
// console.log(mergeString('俺は', '明日', '勉強する'));
// console.log(getArrayString('俺は', '明日', '勉強する'));
// getCalculation();
// console.log('multiple', getMultiple([10, 2, 4, 1], 3));
// console.log(getDrawAsterisk1(5, false));
// console.log(getDrawAsterisk1(5, true));
// console.log(getDrawAsterisk2(5, false));
// console.log(getDrawAsterisk2(5, true));
// console.log(getDrawAsterisk3(5, false));
// console.log(getDrawAsterisk3(5, true));
// const word = `TypeScript はマイクロソフトによって開発され、メンテナンスされているフリーでオープンソースのプログラミング言語である。TypeScriptはJavaScriptに対して、省略も可能な静的型付けとクラスベースオブジェクト指向を加えた厳密なスーパーセットとなっている。C# のリードアーキテクトであり、DelphiとTurbo Pascalの開発者でもあるアンダース・ヘルスバーグが TypeScript の開発に関わっている。TypeScriptはクライアントサイド、あるいはサーバサイド (Node.js) で実行されるJavaScriptアプリケーションの開発に利用できる。`;
// console.log(isSearchText(word, 'TypeScript'));
// console.log(isSearchText(word, 'メンテナンス'));
// console.log(isSearchText(word, 'shohei'));
// console.log(getSearchTextCount(word, 'TypeScript'));
// console.log(getSearchTextCount(word, 'メンテナンス'));
// console.log(getSearchTextCount(word, 'shohei'));
// console.log(getSort([8, 4, 3, 7, 6, 5, 2, 1], true))   // [ 8, 7, 6, 5, 4, 3, 2, 1 ]
// console.log(getSort([8, 4, 3, 7, 6, 5, 2, 1], false))  // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// console.log(getSort([800, 4, 30, 700, 60, 5, 10, 1, 10], true))   // [ 800, 700, 60, 30, 10, 10, 5, 4, 1 ]
// console.log(getSort([800, 4, 30, 700, 60, 5, 10, 1, 10], false))  // [ 1, 4, 5, 10, 10, 30, 60, 700, 800 ]
// intervalTimer(5);
// console.log(getKeyValues('0', 'shohei')); // { id: '0', value: 'shohei' }
// console.log(getNormKeyValues(inputKeyValues1)); // { id: '100', name: 'shohei', birthday: '1988/10/07' }
// console.log(getNormKeyValues(inputKeyValues2)); // { ringo: 'apple' }
// const kobun = new Kobun();
// console.log(kobun.getOtakara()); // お宝の在りかは大阪上本町の上の方だよ！
// const shohei = new PhoneHuman('shohei', '08012345678')
// const yamada = new PhoneHuman('山田', '09000000000')
// shohei.setFriend(yamada);
// yamada.setFriend(shohei);
// shohei.call();
// yamada.call();
referenceAndCopy();
