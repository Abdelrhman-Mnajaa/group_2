function longerString(para1,para2,para3,para4){

    let maxStr=para1;
    for (let i=1;i<arguments.length;i++)
        if (maxStr.length<arguments[i].length)
            maxStr=arguments[i]
    return maxStr;
}
console.log(longerString("Abd","Ahmad","Abdelhameed","Ahed"));