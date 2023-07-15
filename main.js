let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let minNumber = Math.min (...arr);

function minValue (value) {return value === minNumber;}
const index1 = arr.findIndex(minValue);

console.log ("Мінімальне значення: " + minNumber, " Порядковий номер: " + index1);

let maxNumber = Math.max (...arr);

function maxValue(value) {return value === maxNumber;}
const index2 = arr.findIndex(maxValue);

console.log ("Максимальне значення: " + maxNumber, " Порядковий номер: " + index2);


console.log  ("Визначити кількість негативних елементів.");

let result = 0;

for (let i = 0; i < arr.length; i++ )  {

    if (arr [i] < 0) {
        
    result += 1;
    }
}

console.log (result);

console.log ("Знайти кількість непарних позитивних елементів.");

result = 0;

for (let i = 0; i < arr.length; i++ )  {

    if (arr [i]  % 2 > 0) {
        
     result += 1;

    }
}

console.log (result);

console.log ("Знайти кількість парних позитивних елементів.");

result = 0;

for (let i = 0; i < arr.length; i++ )  {

    if (arr[i] % 2 === 0) {

        if (arr[i] > 0) {

            result += 1;    
        }  
    }
}

console.log (result);

console.log ("Знайти суму парних позитивних елементів.");

let sum = 0;

for (let i = 0; i < arr.length; i++ )  {

    if (arr[i] % 2 === 0) {

        if (arr[i] > 0) {

            sum += arr[i];    
        }  
    }
}

console.log (sum);





console.log ("Знайти суму непарних позитивних елементів.");

sum = 0;

for (let i = 0; i < arr.length; i++ )  {

    if (arr[i] % 2) {

        if (arr[i] > 0) {

            sum += arr[i];    
        }  
    }
}

console.log (sum);


console.log ("Знайти добуток позитивних елементів.");

sum = 1;

for (let i = 0; i < arr.length; i++ )  {

        if (arr[i] > 0) {

            sum *= arr[i];    
        }  

}

console.log (sum);


console.log ("Знайти найбільший серед елементів масиву, остальні обнулити.");


function number (value) {
    let max = Math.max (...arr);
    return value === max;
}

console.log(arr.filter(number));