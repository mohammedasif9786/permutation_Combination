// [1,2,3]
// [1,2,3] [1,3,2] [2,1,3] [2,3,1]


let permuComb =(inputArr)=>{

    let combArr = []

    for(let i=0 ;i<inputArr.length ; i++){
        let uniqueArr =[inputArr[i]]
        for(let j=0; j<inputArr.length ;j++){
          if(inputArr[i] != inputArr[j]){
            uniqueArr.push(inputArr[j])

          }
          
        
    }
    combArr.push(uniqueArr)
    }


return combArr
}
permuComb([1,2,3,])