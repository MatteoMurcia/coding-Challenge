function findSum(arr,sum){
    let s = new Set();
        for (let i = 0; i < arr.length; ++i)
        {
            let temp = sum - arr[i];
 
            // checking for condition
            if (s.has(temp)) {
                console.log(arr[i]+','+temp)
            }
            s.add(arr[i]);
        }
}

//test
let A = [ 1, 9, 5, 0, 20, -4, 12, 16, 7];
let n = 12;
findSum(A, n);