function binarySearch(arr, target) {
    let min = 0;
    let max = arr.length - 1;
  
    while (min <= max) {
      let mid = Math.floor((min + max) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
  
    return 'Invalid value.'; 
  }
  
  const array = [1, 3, 5, 7, 9,11,15,19,25,37,81,90,101];
  const target = 9;
  
  console.log(binarySearch(array, target)); 
  console.log(binarySearch(array, 15)); 
  console.log(binarySearch(array, 37));
  console.log(binarySearch(array, 7));
  console.log(binarySearch(array, 2));
  console.log(binarySearch([], 2));

  //atenção bacana em (tabela hash e grafos)