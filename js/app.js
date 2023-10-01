// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

// findBiggestWord(str)

function findBiggestWord(str) {
    let words = str.split(' ');
    let biggestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > biggestWord.length) {
            biggestWord = words[i];
        }
    }
    return biggestWord;
}

// 2. написать функцию которая принимает число и возвращает перевернутое число

// function reverseNumber(number)

const number = 20;
function getReversedNum(num) {
    let result = 0;
    while (num) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return result;
}
console.log(getReversedNum(num));

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

// function unique(str) 

function unique(str) {
    let uniqueStr = '';

    for (let char of str) {
        if (uniqueStr.indexOf(char) === -1) {
            uniqueStr += char;
        }
    }

    return uniqueStr;
}

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

// function calcPoints(win, draw, loss)

function calcPoints(win, draw, loss) {
    return win * 3 + draw;
}
const totalPoints = calcPoints(5, 3, 2);
console.log(totalPoints);

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

// function statisctics(arr);

const arr = [1, 2, 3, 4, 5];
function statistics(arr) {
    if (arr.length === 0) {
        return {
            max: undefined,
            min: undefined,
            count: 0,
            average: undefined
        };
    }

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const count = arr.length;
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const average = sum / count;

    return {
        max: max,
        min: min,
        count: count,
        average: average
    };
}
const result = statistics(arr);
console.log(result);

// 6.Написать функцию которая принимает массив работников компании 

const workers = [
    { name: "Jimm", salary: 40000, department: "IT" },
    { name: "Bob", salary: 60300, department: "HR" },
    { name: "Stacy", salary: 15000, department: "IT" },
    { name: "Tom", salary: 55200, department: "DEVOPS" },
    { name: "Kate", salary: 25000, department: "IT" },
    { name: "John", salary: 40000, department: "HR" },
    { name: "Billy", salary: 60000, department: "DEVOPS" },
];

// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 

function highestAverageSalary(workers) {
    const departmentSalaries = {};

    for (const worker of workers) {
        const { department, salary } = worker;

        if (!departmentSalaries[department]) {
            departmentSalaries[department] = { totalSalary: 0, count: 0 };
        }

        departmentSalaries[department].totalSalary += salary;
        departmentSalaries[department].count += 1;
    }

    let highestAvgSalary = 0;
    let highestAvgDepartment = '';

    for (const department in departmentSalaries) {
        const avgSalary = departmentSalaries[department].totalSalary / departmentSalaries[department].count;

        if (avgSalary > highestAvgSalary) {
            highestAvgSalary = avgSalary;
            highestAvgDepartment = department;
        }
    }

    return {
        department: highestAvgDepartment,
        average: highestAvgSalary
    };
}
const result = highestAverageSalary(workers);
console.log(result);

