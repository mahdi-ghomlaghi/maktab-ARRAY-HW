// ------------------------------deleteByIndex------------------------------
let myarray = ["a", "b", "c", "d"]
let index = 1
function deleteByIndex(arrName, index) {
    arrName.splice(index, 1)
    return arrName
}
console.log(deleteByIndex(myarray, index))
// ------------------------------concatArray------------------------------
let arr_1 = [2, 3, 1, 4]
let arr_2 = [7, 9, 5]
let arr_3 = [6, 0, 8]
function myconcat(arr_1, arr_2, ...arr_n) {
    let newArr = arr_1.concat(arr_2, ...arr_n)
    return newArr
}
//console.log(myconcat(arr_1, arr_2, arr_3))
function mySort(array) {
    let sortArr = myconcat(arr_1, arr_2, arr_3)
    sortArr = sortArr.sort()
    return sortArr
}
console.log(mySort(myconcat(arr_1, arr_2, arr_3)))
// ------------------------------deleteDuplicate------------------------------
let myArray = [3, 2, 3, 6, 5, 2, 3, 42, 6, 5.2, -3, 7, -2, 3, -3, 5.2]
// let myArray = [1, 2, 3, 2, 2, 3, 3, 2, 1, 2, 3, 3, 3, 3, 2, 1]
for (let i = 0; i < myArray.length; i++) {
    let item1 = myArray[i];
    for (let j = i + 1; j < myArray.length; j++) {
        let item2 = myArray[j];
        if (item1 === item2) {
            delete myArray[j]
        }
    }
}
const arrFiltered = myArray.filter(el => {
    return el != null && el != '';
});
console.log(arrFiltered)
// ------------------------------extractNums------------------------------
function extractNums(str) {
    let arr = str.split(' ');
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i])) {
            newArr.push(arr[i])

        }
    }
    return newArr
}
let str = "you can enter 22  maximum 500 choices 17";
console.log(extractNums(str))

// ------------------------------FlatArray------------------------------
function myFlat(array) {
    let newArr = array.flat(Infinity)
    return newArr
}
let myArr = [1, 2, 3, [4, 5, 6, 7, [8, 9, 10, 11, 12, [13, 14, 15, ["a", "b", ["c", 0]]]]]]
console.log(myFlat(myArr))


