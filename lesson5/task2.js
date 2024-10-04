let averageGrade = 85

switch (true) {
    case averageGrade < 60:
        console.log('Unsatisfactory')
        break
    case averageGrade >= 60 && averageGrade <= 70:
        console.log('Satisfactory')
        break
    case averageGrade > 70 && averageGrade <= 80:
        console.log('Good')
        break
    case averageGrade > 80 && averageGrade <= 90:
        console.log('Very good')
        break
    case averageGrade > 90 && averageGrade <= 100:
        console.log('Excellent')
        break
    case averageGrade > 100:
        console.log('This grade is not allowed')
}
