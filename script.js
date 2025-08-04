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

        console.log("https://youtu.be/dQw4w9WgXcQ");

        /*
        const p = document.querySelector("p");
        if (p)
        {
            p.textContent = "Hello, world!";
        }
        */
        document.querySelector("p").textContent = "Hello, world!";

        // ...To here!
    }
})[functionName]();