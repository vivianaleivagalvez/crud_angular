import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto'

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
 productoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    })

   }

  ngOnInit() {
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

    console.log(PRODUCTO);
  }

}
