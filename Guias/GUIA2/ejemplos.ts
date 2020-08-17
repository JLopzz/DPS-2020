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