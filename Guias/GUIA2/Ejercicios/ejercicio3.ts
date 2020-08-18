class Empleado{
  nombre : string
  salario : number

  constructor( nombre:string, salario:number ){
    this.nombre = nombre
    this.salario = salario
  }

  deducciones( isss?:boolean, afp?:boolean, renta?:boolean):number{
    let sueldo = this.salario
    let newSalario = sueldo
    if(isss || afp || renta){
      if(isss) newSalario = newSalario - (sueldo * 0.03)
      if(afp) newSalario = newSalario - (sueldo * 0.0725)
      if(renta){
        if(sueldo > 472 && sueldo <= 895.24) newSalario = newSalario - (((sueldo - 472) * 0.1) + 17.67)
        else if(sueldo > 895.25 && sueldo <= 2038.1) newSalario = newSalario - (((sueldo - 895.24) * 0.2) + 60)
        else if(sueldo > 2038.11 && sueldo > 2038.11) newSalario = newSalario - (((sueldo - 2038.1) * 0.3) + 288.57)
      } 
      return newSalario;
    }
    else{
      return newSalario - (sueldo * 0.03) - (sueldo * 0.0725) - (sueldo * 0.1)
    }
  }
}

var emp = new Empleado("Juan", 300)
console.log(emp.deducciones(false,false,true))