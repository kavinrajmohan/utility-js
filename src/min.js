const head = require('./head');
const tail = require('./tail');

const findMin = (inputList, value) => {
    if(inputList.length > 0)
    {
        const firstElement = head(inputList);

        if(value)
        {
            value = value < firstElement ? value : firstElement;
        }
        else{
            value = firstElement;
        }
        return findMin(tail(inputList), value);
    }
    return value;
}

const min = (list) => {
    const value = undefined;
    return findMin(list, value);
}

module.exports = min;