// get sum of array items
function getSums(arr) {
    return arr.map((item, index) => {
        console.log(index);
        return arr.slice(0, index + 1).reduce((previous, next) => {
            return previous + next;
        })
    })
}