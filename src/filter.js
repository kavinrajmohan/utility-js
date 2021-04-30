const head = require('./head');
const tail = require('./tail');

const filter = (list, fun) => {
    return filterInputElement(list, [], fun);
}

const filterInputElement = (inputList, outputList, fun) => {
    if(inputList.length > 0)
    {
        const firstElement = head(inputList);
        const isTrueToBeOutput = fun(firstElement);

        if(isTrueToBeOutput)
        {
            const length = outputList.length;
            outputList[length] = firstElement;
        }

        return filterInputElement(tail(inputList), outputList, fun);
    }
    return outputList;
}

module.exports = filter;