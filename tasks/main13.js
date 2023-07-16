function shorterString(para1,para2,para3,para4,para5){

    let minStr=para1;
    for(let i=1;i<arguments.length;i++)
        if(minStr.length >arguments[i].length)
            minStr=arguments[i];
        return minStr;
    }

console.log(shorterString('A414','Ak1','AAA11','A5','z'));



