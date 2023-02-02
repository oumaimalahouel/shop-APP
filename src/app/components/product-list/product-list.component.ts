import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products : Product[] = [] ;
isDisplayModel:boolean=false
modalProduct:Product|undefined

ngOnInit(): void {

this.products =[
//cycle hook angular
    {
      _id:'1255555',
      name:'Robe long blanc et noir rayé, manche courte',
      description : 'Robe long blanc et noir rayé, manche courte',
      category:['Robes','Femmes'],
      imageUrl:[
        '/assets/images/products/robe1/1.webp',
         '/assets/images/products/robe1/2.webp',
         '/assets/images/products/robe1/3.webp',
         '/assets/images/products/robe1/4.webp'
      ],
      sold_price : 149 ,
      regular_price : 299,
      created_at: new Date()
    },
    {
       _id:'8455555',
      name:'T-shirt long blanc et noir rayé, manche courte',
      description : 'T-shirt  long blanc et noir rayé, manche courte',
      category:['Robes','Femmes'],
      imageUrl:[
        '/assets/images/products/robe2/1.webp',
         '/assets/images/products/robe/2.webp'

      ],
      sold_price : 1599 ,
      regular_price : 2599,
      created_at:new Date()
    },{
     _id:'82556',
    name:'Robe long  noir , manche courte',
      description : 'robe   noir rayé, manche courte',
      category:['Robes','Femmes'],
      imageUrl:[
        '/assets/images/products/robe3/1.jpg',
         '/assets/images/products/robe3/2.jpg',
         '/assets/images/products/robe3/4.jpg',
         '/assets/images/products/robe3/5.jpg'
      ],
      sold_price : 1599 ,
      regular_price : 2599,
      created_at:new Date()
    },{
       _id:'845789',
      name:'Robe long blanc et bleu rayé, manche courte',
      description : 'robe  long blanc et bleu rayé, manche courte',
      category:['Robes','Femmes'],
      imageUrl:[
        '/assets/images/products/robe4/1.webp',
        '/assets/images/products/robe4/2.webp'

      ],
      sold_price : 1500 ,
      regular_price :3254,
      created_at:new Date()
    },{
       _id:'147855',
      name:'Robe long multicolore, manche long',
      description : 'robe muticolore, manche long',
      category:['Robes','Femmes'],
      imageUrl:[
        '/assets/images/products/robe5/1.webp',
         '/assets/images/products/robe5/2.webp',
         '/assets/images/products/robe5/3.webp',
         '/assets/images/products/robe5/4.webp'
      ],
      sold_price : 1000 ,
      regular_price : 2300,
      created_at:new Date()
    },{
       _id:'369874',
      name:'Robe long blanc et noir rayé, manche long',
      description : 'T-shirt  long blanc et noir rayé, manche long',
      category:['Robes','Femmes'],
      imageUrl:[
        '/assets/images/products/robe6/1.webp',
         '/assets/images/products/robe6/2.webp',
         '/assets/images/products/robe6/3.webp',
         '/assets/images/products/robe6/4.webp'
      ],
      sold_price : 4500 ,
      regular_price : 1350,
      created_at:new Date()
    },{
       _id:'651423',
      name:'Robe long blanc soiré, manche courte',
      description : 'robe long soiré , manche courte',
      category:['Robes','Femmes'],
      imageUrl:[
        '/assets/images/products/robe7/1.webp',
         '/assets/images/products/robe7/2.webp',
         '/assets/images/products/robe7/3.webp'

      ],
      sold_price : 8900 ,
      regular_price : 5500,
      created_at:new Date()
    },{
       _id:'458123',
      name:'robe courte  blanc et noir avec ceinture, manche long ',
      description : 'robe courte',
      category:['Robes','Femmes'],
      imageUrl:[
        '/assets/images/products/robe8/1.webp',
         '/assets/images/products/robe8/2.webp',
         '/assets/images/products/robe8/3.webp',
         '/assets/images/products/robe8/4.webp',
        '/assets/images/products/robe8/5.webp'
      ],
      sold_price : 3000 ,
      regular_price : 2523,
      created_at:new Date()
    },{
       _id:'159637',
      name:'robe courte  blanc et marron , manche long ',
      description : 'robe courte',
      category:['Robes','Femmes'],
      imageUrl:[
        '/assets/images/products/robe9/1.webp',
         '/assets/images/products/robe9/2.webp',
         '/assets/images/products/robe9/3.webp',
         '/assets/images/products/robe9/4.webp',
        '/assets/images/products/robe9/5.webp'
      ],
      sold_price : 4000 ,
      regular_price : 2523,
      created_at:new Date()
    },{
       _id:'75942318',
      name:'robe long  blanc , manche courte ',
      description : 'robe long multif',
      category:['Robes','Femmes'],
      imageUrl:[
        '/assets/images/products/robe10/1.webp',
         '/assets/images/products/robe10/2.webp',
         '/assets/images/products/robe10/3.webp',
         '/assets/images/products/robe10/4.webp',
        '/assets/images/products/robe10/5.webp'
      ],
      sold_price : 6251 ,
      regular_price : 3223,
      created_at:new Date()
    },{
       _id:'1587962',
      name:'robe rouge long avec courte manche ',
      description : 'Soiré',
      category:['Robes','Femmes'],
      imageUrl:[
        '/assets/images/products/robe11/1.webp',
         '/assets/images/products/robe11/2.webp',
         '/assets/images/products/robe11/3.webp',
         '/assets/images/products/robe11/4.webp',
        '/assets/images/products/robe11/5.webp'
      ],
      sold_price : 6510 ,
      regular_price : 5014,
      created_at:new Date()
    },
      {
       _id:'458123',
      name:'robe long blanc , manche courte ',
      description : 'robe long ',
      category:['Robes','Femmes'],
      imageUrl:[
        '/assets/images/products/robe12/1.webp',
         '/assets/images/products/robe12/2.webp',
         '/assets/images/products/robe12/3.webp',
         '/assets/images/products/robe12/4.webp',
        '/assets/images/products/robe12/5.webp'
      ],
      sold_price :7800 ,
      regular_price : 6900,
      created_at:new Date()
    }




  ]


console.log(this.products)


}



handleDeleteProduct(product:Product){
  this.products=this.products.filter(p=>p._id !==product._id)

}
handleDisplayProductViewModal(product:Product){
if (product){
  this.isDisplayModel=true
  this.modalProduct=product
}
}
handleFermerProductViewMode(){
  this.isDisplayModel=false
}

handleCloseModal(){
  this.isDisplayModel=false
  this.modalProduct=undefined
}
}


