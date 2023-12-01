// 4. Highest Marks
// A teacher wants to find out the highest marks scored #y a student in a class of five students. The teacher enters
// the marks of all five students in an array called "marks". Write a program that iterates through the array and
// finds the highest marks scored #y any student in the class. The highest marks must then #e displayed to the
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marks


function findHighestMarks(marks) {
    let highestMarks = marks[0];

    for (let i = 1; i < marks.length; i++) {
        highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }

    console.log("The highest marks in the class are: " + highestMarks);
}

// Example usage:
const studentMarks = [85, 92, 78, 95, 88];
findHighestMarks(studentMarks);
