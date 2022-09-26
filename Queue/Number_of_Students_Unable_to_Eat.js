// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

// The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

//     If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
//     Otherwise, they will leave it and go to the queue's end.

// This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

// You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.

// Solution 1: Doesn't use a queue DS but same idea. Not very efficient...

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

 var countStudents = function(students, sandwiches) {
    
    function removeFirstElement(arr) {
        return arr.splice(0, 1);
    }
    
    function firstToLast(arr) {
        let element = arr[0];
        arr.splice(0, 1);
        arr.push(element);
    }
    
    let completed = false;
    let counter = 0;
    
    while (!completed) {
        if (students[0] === sandwiches[0]) {
            removeFirstElement(students);
            removeFirstElement(sandwiches);
            counter = 0;      
        } 
        
        else {
            firstToLast(students);
            counter++;
        }
        
        if (counter === students.length) {
            break;
        }
    }
    
    return counter;
};

// Runtime: 100 ms, faster than 34.45% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
// Memory Usage: 42.7 MB, less than 17.22% of JavaScript online submissions for Number of Students Unable to Eat Lunch.


// Solution 2: Remove functions, use shift(). Much better though still not great.

 var countStudents = function(students, sandwiches) {
    
    function removeFirstElement(arr) {
        return arr.splice(0, 1);
    }
    
    function firstToLast(arr) {
        let element = arr[0];
        arr.splice(0, 1);
        arr.push(element);
    }
    
    let counter = 0;
    
    while (true) {
        if (students[0] === sandwiches[0]) {
            students.splice(0, 1);
            sandwiches.splice(0, 1);
            counter = 0;      
        } 
        
        else {
            let element = students.shift();
            students.push(element);
            counter++;
        }
        
        if (counter === students.length) {
            break;
        }
    }
    
    return counter;
};

// Runtime: 93 ms, faster than 55.50% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
// Memory Usage: 42.1 MB, less than 55.02% of JavaScript online submissions for Number of Students Unable to Eat Lunch.