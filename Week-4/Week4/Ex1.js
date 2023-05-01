const getNumber= () => {
    new CustomPromise((res, rej) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
        if(randomNumber % 5 === 0 ){
            rej(`rejected with number : ${randomNumber}`)
        }
        res(`rejected with number : ${randomNumber}`)
    }, randomNumber * 10);
})
}

class CustomPromise{
    customPromiseState = "pending";

    constructor(fn){
        //customPromiseState = "pending";
        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.thenFn = null;
        this.catchFn = null;
        fn(this.resolver, this.rejector)
    }
    resolver(resolvedData){
        if(this.customPromiseState = "pending"){
            this.thenFn && this.thenFn(resolvedData)
        }
        this.customPromiseState = "resolved";
    }
    rejector(rejectedData){
        if(this.customPromiseState = "pending"){
            this.catchFn && this.catchFn(rejectedData)
        }
        this.customPromiseState = "rejected"
    }
    then(thenFn){
        this.thenFn = thenFn;
        return this
    }
    catch(catchFn){
        this.catchFn = catchFn;
        return this
    }

}

console.log(getNumber());