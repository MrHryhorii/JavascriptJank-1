/*
    GENERAL RESTRICTIONS:
     - Do not modify anything that is not explicitly marked as modifyable
     - You're not allowed to declare any values that aren't already declared
     - You're not allowed to use string literals or -templates (i.e. "string", 'string' or `string`)
*/


const functionName = "myFunction"; // <--- You're allowed to modify this string!

({
    [functionName]() {
        // And you're allowed to edit from here...

        
        console.log([104,116,116,112,115,58,47,47,121,111,117,116,117,46,98,101,47,100,81,119,52,119,57,87,103,88,99,81]
            .map(c => String.fromCharCode(c))
            .join(""));

        document.body.firstElementChild
            .textContent = [72,101,108,108,111,44,32,119,111,114,108,100,33]
            .map(c => String.fromCharCode(c))
            .join("");

        // ...To here!
    }
})[functionName]();