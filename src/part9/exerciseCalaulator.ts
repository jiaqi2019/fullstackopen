interface ResultValue {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number 
} 

function calculateExercises(arr: number[], target: number): ResultValue{
  let periodLength,
      trainingDays = 0,
      average = 0,
      success = false,
      rating = 1,
      ratingDescription = 'you are looser',
      sum = 0

  periodLength = arr.length
  if(!periodLength) return {periodLength,trainingDays,average,success,rating,ratingDescription, target}

  for(let item of arr){
    if(item > 0){
      trainingDays++
      sum += item
    } 
  }
  average = sum / periodLength
  if(average >= target) success = true
  rating = Math.ceil((average / target * 100) / 33.333) 
  rating > 3 && (rating = 3)

  
  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  }
}

interface ParsedRes{
  argsArr: number[],
  target: number
}
function parseArguments(args: string[]): ParsedRes{
  let ret = []
  let arr = args.slice(2)
  for(let item of arr){
    if(!isNaN(Number(item))){
      ret.push(Number(item))
    }else{
      throw new Error('Provided values were not numbers!')
    }
  }
  let target = ret[ret.length - 1]
  ret.splice(arr.length -1)
  return {
    argsArr: ret,
    target
  }
}

try {
  let {argsArr, target} = parseArguments(process.argv)
  console.log(calculateExercises(argsArr, target));
} catch (e) {
  console.log('error message:', e.message);
}

// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));






















