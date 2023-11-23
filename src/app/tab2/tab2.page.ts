import { Component, OnInit } from '@angular/core';
import { GENERO } from '../core/interface/constants/genero';
import { Genero } from '../core/interface/genero';
import { Producto } from '../core/interface/productos';
import { CATEGORIA } from '../core/interface/constants/cotagoria';
import { ActivatedRoute } from '@angular/router';

const CATEGORIAS = ['Categoria1', 'Categoria2', 'Categoria3'];
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})



export class Tab2Page implements OnInit {
Genero = GENERO

  

    selectedFruit: string;

    constructor(private activatedRoute : ActivatedRoute) {
      this.selectedFruit = ''; 


      activatedRoute.params.subscribe(params => {
        console.log(params)
        if(params['id']){
          const generoEncontrado = GENERO.find (Genero => Genero.id == params['id']);
          if(generoEncontrado) {
            this.generoActual = generoEncontrado;
          }
        }

      })
    }
  
    mostrarTarjeta(fruta: string) {
      this.selectedFruit = fruta;
    }

generoActual = GENERO[0];

  ngOnInit(): void { 
  } 

  categoriaActual=CATEGORIA[0];

  
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

