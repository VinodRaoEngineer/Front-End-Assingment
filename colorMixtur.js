// 3. Color Mixer
// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
// determine the resulting color when the two colors are mixed. The program should print the resulting color
// #ased on the following criteria"
// L If color1 is "red" and color2 is "#lue" or vice versa, print "purple"P
// L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
// L If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green"P
// L If any other com#ination of colors is input, the program should print "Invalid color com#ination"



function colorMixer(color1, color2) {
    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                case "#blue":
                    console.log("Purple");
                    break;
                case "yellow":
                    console.log("Orange");
                    break;
                default:
                    console.log("Invalid color combination");
            }
            break;

        case "blue":
        case "#blue":
            switch (color2) {
                case "red":
                    console.log("Purple");
                    break;
                case "yellow":
                    console.log("Green");
                    break;
                default:
                    console.log("Invalid color combination");
            }
            break;

        case "yellow":
            switch (color2) {
                case "red":
                    console.log("Orange");
                    break;
                case "blue":
                case "#blue":
                    console.log("Green");
                    break;
                default:
                    console.log("Invalid color combination");
            }
            break;

        default:
            console.log("Invalid color combination");
    }
}

// Example usage:
colorMixer("red", "blue"); // Output: Purple
colorMixer("red", "yellow"); // Output: Orange
colorMixer("blue", "yellow"); // Output: Green
colorMixer("green", "yellow"); // Output: Invalid color combination

       