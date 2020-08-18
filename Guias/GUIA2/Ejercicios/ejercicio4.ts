class Calculadora{
  numero1 : number
  numero2 : number

  constructor( num1:number, num2:number ){
    this.numero1 = num1
    this.numero2 = num2
  }

  opBasicas():void{
    let n1 = this.numero1
    let n2 = this.numero2
    console.log(
      `Operaciones Realizadas:
      ${n1} + ${n2} = ${n1+n2}
      ${n1} - ${n2} = ${n1-n2}
      ${n1} * ${n2} = ${n1*n2}
      ${n1} / ${n2} = ${(n1/n2).toFixed(2)}`
    )
  }
}
