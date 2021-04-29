const head = require('./head');
const tail = require('./tail');

const map = (list, functionCall) => {
    return mapListElements(list, [], functionCall);
}

const mapListElements = (inputList, outputList, functionCall) => {
    if(inputList.length > 0)
    {
        const firstElement = head(inputList);
        const outputElement = functionCall(firstElement);

        const length = outputList.length;
        outputList[length] = outputElement;

        return mapListElements(tail(inputList), outputList, functionCall);
    }
    return outputList;
}

module.exports = map;