function App(){
  const numbers=[1,2,3,4,5,6]

  const squares=numbers.map((ele)=>Math.pow(ele,2))
  const cubes = numbers.map((ele)=>Math.pow(ele,3))
  const evenNum=numbers.filter((ele)=>ele%2===0)
  const oddNum=numbers.filter((ele)=>ele%2===1)
  const total=numbers.reduce((acc,ele)=>acc+ele)

  console.log(squares)
  console.log(cubes)
  console.log(evenNum)
  console.log(oddNum)
  console.log(total)
}
export default App;