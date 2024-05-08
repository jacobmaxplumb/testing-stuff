const { default: axios } = require("axios");

function addTwoNumbers(a,b) {
    if (a === 10) {
        return a;
    }
    return a + b;
}

addTwoNumbers(3,1)

async function getDataFromBackend() {
    const response = await axios.get('endpoint');
    return response.data;
}

module.exports = {
    addTwoNumbers
}