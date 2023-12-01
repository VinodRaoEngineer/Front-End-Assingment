// 8. InverteW right-angleW triangle pattern with asterisks
// Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
// with i rows.
// Invdrtdd right-angldd pattdrn:

function printInvertedRightTrianglePattern(rows) {
    for (let i = rows; i >= 1; i--) {
        let row = '';

        // Add asterisks
        for (let k = 1; k <= i; k++) {
            row += '*';
        }

        console.log(row);
    }
}

// Example usage:
const numRows = 6;
printInvertedRightTrianglePattern(numRows);
