// Задание 1
function pickPropArray(array, property) {
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (array[i][property] !==  undefined)
            result.push(array[i][property]);
    }
    return result; 
}

// Задание 2
function createCounter(){
    let count = 0;
    return function () {
      count++;
      return count;
    }
}

// Задание 3
function spinWords(str){
    let array = str.split(" ");
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].length >= 5) 
            result.push(array[i].split("").reverse().join(""));
        else 
            result.push(array[i]);
    }
    return result.join(" ");
}

// Задание 4
function getIndexes(nums, target) {
    for (let i = 0; i< nums.length; i++){
        for (let j = 0; j < nums.length; j++)
            if (nums[i] + nums[j] == target)
                return [i, j]
    }
    return [];
}

// Задание 5
function getLongString(strs){
    let prefix = strs[0];
    while (prefix.length >= 2) {
        let flag = true;
        for (let i = 1; i <strs.length; i++){
            if (!strs[i].includes(prefix)) {
                prefix = prefix.substring(1);
                flag = false;
                break;
            }
        }
        if (flag) 
            break;
    }
    if (prefix.length >= 2){
        return prefix;
    } else{
        return "";
    }
}