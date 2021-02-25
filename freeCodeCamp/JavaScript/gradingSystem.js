let allStudents = ["A", "B-", 1, 4, 5, 2];
let studentsWhoPass = [];

for (let i = 0; i < allStudents.length; i++) {
  if (allStudents[i] === 'A' || allStudents[i] === 'A-' || allStudents[i] === 'B' || allStudents[i] === 'B-' || allStudents[i] === 'C' || allStudents[i] >= 3) {
    console.log('Good job!');
    studentsWhoPass.push(allStudents[i]);
  } else console.log('Better luck this summer!')
}
console.log(studentsWhoPass); 

let passed = studentsWhoPass.length;
let all = allStudents.length;
console.log('failures: ' + (all - passed) + ', pass rate: ' + (passed / all * 100) + '%');

