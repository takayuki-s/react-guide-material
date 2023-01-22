const Example = () => {
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value)
  }
  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value)
  }
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value)
  }

  const strArry = repeatStr("hello", 3)
  console.log(strArry)

  const numArry = repeatNum(10, 3)
  console.log(numArry)

  const strArry2 = repeat<String>('hello', 3)
  console.log(strArry2)

  const numArry2 = repeat<Number>(10, 3)
  console.log(numArry2)

  const boolArry = repeat<Boolean>(true, 3)
  console.log(boolArry)
};

export default Example;
