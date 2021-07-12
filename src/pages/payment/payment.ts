import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoDTO } from '../../models/pedito.dto';


@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  pedito: PedidoDTO;

  parcelas: number[] = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    this.pedito = this.navParams.get('pedido');

    this.formGroup = this.formBuilder.group({
      numeroDeParcelas: [1, Validators.required],
      "@type": ["pagamentoComCartao", Validators.required]
    });
  }

  nextPage() {
    this.pedito.pagamento = this.formGroup.value;
    console.log(this.pedito);
  }
}