// Grade 타입 정의
type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

// 수강 과목 객체
interface Course{
    courseId: number,   //과목 아이디
    courseName: string,  //과목명
    grade: Grade  //학점 타입 참조
}

// 학생 객체 정의
interface Student{
    id: number,
    name: string,
    subjects: Course[]   //수강 과목 객체 참조
}

// 객체 생성
let std1: Student = {
    id: 1,
    name: "김선화",
    subjects : [
        { courseId: 101, courseName: "수학", grade: 'A'},
        { courseId: 102, courseName: "영어", grade: 'B'},
    ]
}

// 학생 정보 출력
std1.subjects.forEach(subject => 
        console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`));