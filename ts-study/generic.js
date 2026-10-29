"use strict";
// 제네릭 배열
// Array(배열을 생성하는 클래스)
const scores = [80, 90, 100];
console.log(scores);
console.log(scores[0] + scores[1]);
// 제네릭 함수 정의
function getFirst(arr) {
    return arr[0];
}
const num = getFirst([10, 20, 30]);
const str = getFirst(["사과", "바나나", "딸기"]);
console.log(num, str);
