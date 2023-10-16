function zip(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      throw new Error("Les tableaux n'ont pas la même dimension.");
    }
  
    const result = [];
  
    for (let i = 0; i < arr1.length; i++) {
      result.push([arr1[i], arr2[i]]);
    }
  
    return result;
}
  
const array1 = [1, 2];
const array2 = [3, 4];

const zipped = zip(array1, array2);
console.log(zipped); // [[1, 3], [2, 4]]
  