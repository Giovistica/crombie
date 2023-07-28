interface Persona{
    name:string
    age:number
}
interface Profesor extends Persona {
    materias: string
    curso:string
}

type Persona2 = {

    name:string
    age:number
}
type Materia = "matematica" | "fisica" | "quimica"

type Alumno = Persona2 & {

    materias: Materia[]
    escuela: string


}
type Merge<T,K> = T & K

type Random = Merge<Alumno,Persona2>

const random: Random = 