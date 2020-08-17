//Imprimir en consola
console.log("Hola Mundo, desde TypeScript");

//Variables y Valores Primitivos
var full_name:string = "Gerardo Lopez"
var age:number = 22
var developer:boolean = true

//Arreglos
var skills:Array<string> = ['JavaScript','TypeScript','Angular','PHP']
var arrNumeros:number[] = [123,234,345,456]

//Enum
enum ROLE{Employee, Manager, Admin, Developer}
var role:ROLE = ROLE.Employee

//Funciones
/*funcion que no retorna nada ni reciba parametro*/
function Hello():void{
}

/*fucnion que no retorne nada, y si recibe param*/
function setNameEx1(name:string):void{
}
/*funcion que recibe dos parametros y devuelve un dato string*/
function setNameEx2(name:string,surName:string):string {
  return "string"
}
/** Ejemplo de variables internas en funciones **/
function setNameEx3(name:string):string{
let varInterna : string = "Javier"
  return "Hola" + name
}
console.log("Hola"+varInterna)//retorna error de referencia, no existe en el contexto
/** Ejemplo de variable global **/
var varExterna = "Arely"
function setNameEx4(name:string):string{
  return "Hola"+name
}
console.log("Hola"+varExterna)

//Objetos
class Persona{
  firstName:string
  lastName:string
  constructor(_firstName?:string,_lastName?:string){
    this.firstName = _firstName
    this.lastName = _lastName
  }
}
var perUno = new Persona()
var perDos = new Persona("Gabriela")
var perTre = new Persona("Arely","Acosta")

//Interpolacion
var a : string = 'Uriel'
var b:string = `Saludos ${this.a}`

function getSaludo():string{ 
  let emoji = '(⌐■_■)'
  return `Saludos
  ${this.a}, le enviamos saludos
  desde la Consola
  ${emoji}`
}

//Interfaces
interface myPersona{
  firstName:string
  lastName:string
  twitterAcount?:string
}
let perCua:myPersona={
  firstName:'Andrea',
  lastName:'Salazar'
}

//Shapes
class Person{
  firstName:string
  lastName:string
  twitterAcount:string

  constructor(){
    this.firstName = 'Jorge'
    this.lastName = "Sosa"
    this.twitterAcount = "@SosaJorge"
  }

  setLastName(last:string){
    this.lastName = last
  }
}

var person = new Person()
person.setLastName('Aguilar')
console.log(person)
