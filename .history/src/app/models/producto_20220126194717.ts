export class Producto {
 _id?: number;
 nombre: string;
 categoria: string;
 ubicacion: string;
 precio: number;

  constructor(nombre: string){
    this.nombre  = nombre;
  }

}
