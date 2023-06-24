function findJudge(n, trust) {

const trustArray = new Array(n+1).fill(0);

for(let [i,j] of trust) {
    trustArray[i] -= 1
    trustArray[j] += 1
}

for(let i = 1; i < trustArray.length; i++) {
    if ((n-1) === trustArray[i]) {
        return i;
    }
}
return -1
};

console.log(findJudge(2, [[1,2]]));
console.log(findJudge(3, [[1,3],[2,3]]));
