class Rombo{
  diaVertical : number
  diaHorizontal : number
  
  constructor( vert:number , hori:number ){
    this.diaVertical = vert
    this.diaHorizontal = hori
  }

  getArea(): number{
    return this.diaHorizontal * this.diaVertical
  }
}