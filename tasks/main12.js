// Abd Sol

function smallerNubmer(para1,para2,para3){
    if (para1 <= para2 && para1 <= para3)
    return para1
    if (para2 <= para1 && para2 <= para3)
    return para2
    if (para3 <= para1 && para3 <= para2)
    return para3

}

console.log(smallerNubmer(-50,2,5))