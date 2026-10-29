
/* Record<Keys, Type>는 객체의 키와 값의 타입을 간편하게
정의할 수 있게 도와주는 유틸리티 타입이다. */

type Fruit = "apple" | "banana" | "peach"

const prices: Record<Fruit, number> = {
    apple: 3000,
    banana: 1500,
    peach: 2000
}

// 출력
console.log(`사과의 가격: ${prices.apple}`);

// StringMap 정의
type StringMap = Record<string, string>

const translations: StringMap = {
    hello: "안녕하세요",
    goodbye: "안녕히 가세요"
}

console.log(translations.hello); 
console.log(translations.goodbye);




