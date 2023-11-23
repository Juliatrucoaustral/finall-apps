import { Producto } from "./productos"

export interface Genero{
    nombre:string
    id: number
    imgUrl:string
    precio: number
    value: string
    productos: Producto[]

}
