/*
　*　計算結果をいろいろ
 */

//余りを求める　マイナスを割るとマイナスの結果になる。
var result;
result = -1%3;
alert(result);

//時間を置き換える。
var min = 100 % 60;
var hour = (100 - min) / 60;
alert('100分は ' + hour + '時間' + min + '分');

//sample2
var min = 340 % 60;
var hour = (340 - min) / 60;
alert('340分は ' + hour + '時間' + min + '分');
