import { Component, OnInit, inject } from '@angular/core';
import { CATEGORIA } from 'src/app/core/interface/constants/cotagoria';
import { Producto } from 'src/app/core/interface/productos';
import {ActivatedRoute, Router} from '@angular/router';
import { CarritoService } from 'src/app/core/services/carrito.service';
import { GENERO } from 'src/app/core/interface/constants/genero';
import { Genero } from 'src/app/core/interface/genero';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  router = inject(Router);

  constructor(private activatedRoute: ActivatedRoute,
    private carritoService: CarritoService) { 
    activatedRoute.params.subscribe(params=>{
      console.log(params)
      CATEGORIA.forEach(categoria=>{
       const productoEncontrado = categoria.productos.find(producto=>producto.id == params['id']);
        if(productoEncontrado){
          this.producto=productoEncontrado
        }
      })
    })

    activatedRoute.params.subscribe(params=>{
      console.log(params)
      GENERO.forEach(Genero=>{
       const productoEncontrado = Genero.productos.find(producto=>producto.id == params['id']);
        if(productoEncontrado){
          this.producto=productoEncontrado
        }
      })
    })
  }

  ngOnInit() {
  }
  producto:Producto={
    id: 0,
    nombre: '',
    precio: 0,
    descripcion:'',
    imagen: ''
  }


  cantidad=1;

  onAgregarAlCarritoClicked(){
    this.carritoService.agregarProducto(this.producto,this.cantidad);
    console.log(this.carritoService.carrito);
    this.router.navigate(['tabs/tab1']);

  }


}
