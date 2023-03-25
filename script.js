let value = document.getElementById("value");
let count = 0;
let resetNum = 0;
function increment(){
    count = count + 1;
    value.innerText = count;
}
function reset(){
    count = resetNum;
    value.innerText = resetNum;
}
