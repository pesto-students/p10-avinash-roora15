const Fibonacci = (n) => ({
    [Symbol.iterator] : () => {
        let i = 1;
        let old, new1 = 0 ;
        return {
            next : () => {
                if( i++ <= n){
                    [old, new1] = [new1, (old + new1) || 1];
                    return { value : old , done :false}
                } else {
                    return{ done : true}
                }
                
            }
        }
    }

})

for( let num of Fibonacci(7)){
    console.log(num);
}