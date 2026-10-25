
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;

    try {
        const parsed = JSON.parse(rawData[i]);

        if (
            parsed.user === undefined ||
            parsed.age === undefined
        ) {
            throw new Error("Missing user or age");
        }

        const age = Number(parsed.age);

        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age");
        }

        const user = {
            user: parsed.user,
            age: age
        };

        clean.push(user);

        if (age < 18) {
            under18.push(user);
        }

        console.log(`Line ${lineNumber}: Valid JSON`, user);
    } catch (error) {
        errors.push({
            line: lineNumber,
            reason: error.message
        });

        console.log(`Line ${lineNumber}: Error - ${error.message}`);
    }
}

console.log("Clean data:", clean);
console.log("Errors:", errors);
console.log("Valid count:", clean.length);
console.log("Error count:", errors.length);
console.log("Users under 18:", under18);
