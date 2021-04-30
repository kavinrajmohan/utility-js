const head = require('./head');
const tail = require('./tail');

const reduceEveryElement = (inputList, fun, value) => {
    
    if(inputList.length > 0){
        const firstElement = head(inputList);

        if(value){
            value = fun(value, firstElement);
        }
        else{
            value = firstElement;
        }
        return reduceEveryElement(tail(inputList), fun, value);
    }
    return value;
}




const reduce = (list, fun, value) => {
    return reduceEveryElement(list, fun, value);
}

module.exports = reduce;