// the solution to the problem is based on the hypothesis that the
// move towards the plain (num = 0) has been preceded by
// a state of presence below sea level (previous = -1)

function countingValleys(n, s) {
        let stepValley = num = previous = 0;

        for (let i = 0; i < n; i++) {

            if (s[i] === "D") {
                num--;

            } else if (s[i] === "U") {
                num++;
            }

            if (previous === -1 && num === 0) {
                stepValley++;
            }

            previous = num;
      }
        return stepValley;
}

console.log(countingValleys(8,  "UDDDUDUU"))
