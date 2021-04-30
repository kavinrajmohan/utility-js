const head = require('./head');
const tail = require('./tail');

const findMax = (inputList, value) => {
    if(inputList.length > 0)
    {
        const firstElement = head(inputList);

        if(value)
        {
            value = value > firstElement ? value : firstElement;
        }
        else{
            value = firstElement;
        }
        return findMax(tail(inputList), value);
    }
    return value;
}

const max = (list) => {
    const value = undefined;
    return findMax(list, value);
}

module.exports = max;