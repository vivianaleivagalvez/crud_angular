import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto'
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
 productoForm: FormGroup;
 titulo = 'Crear producto';
 id: string | null;
  constructor(private fb: FormBuilder, private router: Router, private _productoService: ProductoService,
  private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.esEditar();
  }

  agregarProducto(){
    console.log(this.productoForm)

    console.log(this.productoForm.get('producto').value);

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto').value,
      categoria: this.productoForm.get('categoria').value,
      ubicacion: this.productoForm.get('ubicacion').value,
      precio: this.productoForm.get('precio').value,
    }

    if(this.id !== null){
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data => {
        alert("se actualizó");
      }
    }else{
      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
       alert("Se ha registrado con éxito");
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    }




  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio
        })
      })
    }
  }

}
