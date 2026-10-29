"use strict";
// 객체 생성
let std1 = {
    id: 1,
    name: "김선화",
    subjects: [
        { courseId: 101, courseName: "수학", grade: 'A' },
        { courseId: 102, courseName: "영어", grade: 'B' },
    ]
};
// 학생 정보 출력
std1.subjects.forEach(subject => console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`));
