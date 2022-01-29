import { ProductoService } from './../../../../.history/src/app/services/producto.service_20220128183117';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
listProductos: Producto[] = [];
  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

   obtenerProductos(){
     this._productoService.getProductos().subscribe(data => {
       console.log(data);
       this.listProductos = data;
     }, error => {
       console.log(error);
      }
    )
   }
}
