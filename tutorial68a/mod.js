console.log('this is modules');

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}
module.exports = {
    avg: average,
    name: "satya",
    repo: "GITHub",

};
// module.exports.name = "satya";  when we  do coment out find same line in other file
