const Example = () => {
  let str: string = 'Hello';
  str = 'Bye';
  console.log(str);

  let num: number = 102
  console.log(num)

  let bignum: bigint = 102n
  console.log(bignum)

  let bool: boolean = true
  console.log(bool)

  let nullish: null = null
  console.log(nullish)
  
  let undefinedValue: undefined = undefined;
  console.log(undefinedValue)

  // リテラル型
  let trueVal: true = true;
  let num123: 123 = 123;
  let strHello: 'Hello' = 'Hello';

  // any型(何でも格納可能)
  let anyValue: any = [];
};

export default Example;
