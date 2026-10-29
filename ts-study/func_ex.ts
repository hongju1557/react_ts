// 이름 있는 함수
/*function sub(x: number, y: number){
    return x - y;
}*/

// 화살표 함수
// (x: number, y: number): number(반환 자료형)
const sub = (x: number, y: number): number => {
    return x - y;
} 

const result = sub(5, 10); // 반환값을 저장
console.log(result);

// 반환 자료형 없는 함수 : void
const greet = (name: string): void => {
    console.log(`Hello, ${name}!`);
}

greet("Obama");