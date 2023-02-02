import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-modal-product-view',
  templateUrl: './modal-product-view.component.html',
  styleUrls: ['./modal-product-view.component.css']
})
export class ModalProductViewComponent {
  @Input() product:Product | undefined
  @Output() closeModelView :EventEmitter<string>=new EventEmitter<string>()

  closeModel(){
    this.closeModelView.emit()
  }

}
