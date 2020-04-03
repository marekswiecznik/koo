import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person, Helper } from '../models/person';
import { Product } from '../models/product';

@Injectable()
export class ActionFormService {
  public form: FormGroup;
  products: Product[] = [];
  helpers : Helper[] = [];

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
        newaction: this.fb.group({
          name: '',
          photoUrl: '',
          orderDate: '',
          payDate: '',
          collectionDate: '',
          description: '',
          rules: '',
          collection: '',
          bankaccount: '',
        }),
        newperson: this.fb.group({
          person: '',
          description: ''
        }),
        newproduct: this.fb.group({
          name: '',
          variant: '',
          price: ''
        })
      });

  }

  addNewProduct() {
    this.products.push(new Product(this.form.value.newproduct.name, 
        this.form.value.newproduct.variant, 
        this.form.value.newproduct.price));
  }

  addNewHelper() {
    this.helpers.push(new Helper(this.form.value.newperson.person, this.form.value.newperson.description));
  }

  loadAction(data): void {

    // todo przydalaby się jakaś walidacja?
    let formdata = {
        newaction: {
            ...data
        }
    };
    formdata.newaction.orderDate = {'day': formdata.newaction.orderDate.getDate(), 'month': formdata.newaction.orderDate.getMonth() + 1, 'year': formdata.newaction.orderDate.getFullYear()}
    formdata.newaction.payDate = {'day': formdata.newaction.payDate.getDate(), 'month': formdata.newaction.payDate.getMonth() + 1, 'year': formdata.newaction.payDate.getFullYear()}
    formdata.newaction.collectionDate = {'day': formdata.newaction.collectionDate.getDate(), 'month': formdata.newaction.collectionDate.getMonth() + 1, 'year': formdata.newaction.collectionDate.getFullYear()}

    this.form.patchValue(formdata);

    this.products = data.products;
    this.helpers = data.helpers;
  }
}