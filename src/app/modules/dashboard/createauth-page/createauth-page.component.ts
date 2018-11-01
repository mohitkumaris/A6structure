import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, Form} from '@angular/forms';

@Component({
  selector: 'app-createauth-page',
  templateUrl: './createauth-page.component.html',
  styleUrls: ['./createauth-page.component.scss']
})
export class CreateauthPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }
/*
  Goods to be Processed  :1 or more transformations with following information for each

Main Processed Product
Code NC : drop-down populated with Product Id values (from RITA DB)
Designation : populated with Product description (from RITA DB)
Rate of Return : non-editable,  defaulted to 100%
Rate determination method :??
Secondary Product(s) : 1 or more with following information for each
Code NC : drop-down populated with Product Id values (from RITA DB)
Designation : populated with Product description (from RITA DB)
Rate of Return : non-editable,  defaulted to 100%
Rate determination method :??
Processing Place : drop-down populated with Processing Places owned by Operator
 */
  AuthForm: FormGroup;
  Goods: FormArray;
  MainProcessed: FormArray;
  SecondaryProcessed: FormArray;
  submitted = false;

  ngOnInit() {
    this.AuthForm = this.formBuilder.group({
      Authorization: '',
      CustomsProcedure: '',
      GeographicalValidity: '',
      StartDate: '',
      ExpirationDate: '',
      Goods: this.formBuilder.array([this.createGoods()]),
      MainProcessed: this.formBuilder.array([this.createMainProcesed()]),
      SecondaryProcessed: this.formBuilder.array([this.createSecondaryProcessed()])
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.AuthForm.controls;
  }

  createGoods(): FormGroup {
    return this.formBuilder.group({
      CodeNC: '',
      Designation: '',
      Quantity: '',
      Unit: '',
      UnitOfMeasure: '',
      Value: ''
    });
  }
  createMainProcesed(): FormGroup {
    return this.formBuilder.group({
      CodeNC: '',
      Designation: '',
      RateofReturn : '100%',
      Ratedeterminationmethod: '',
      ProcessingPlace: '',
      SecondaryProcessed: this.formBuilder.array([this.createSecondaryProcessed()])
    });
  }
  createSecondaryProcessed(): FormGroup {
    return this.formBuilder.group({
      CodeNC: '',
      Designation: '',
      RateofReturn : '100%',
      Ratedeterminationmethod: '',
    });
  }

  addGoods(): void {
    this.Goods = this.AuthForm.get('Goods') as FormArray;
    this.Goods.push(this.createGoods());
  }
  removeGoods(): void {
    this.Goods = this.AuthForm.get('Goods') as FormArray;
    this.Goods.removeAt(1);
  }
  addSecondaryProcessed(): void {
    this. SecondaryProcessed = this.AuthForm.get('SecondaryProcessed') as FormArray;
    this.SecondaryProcessed.push(this.createSecondaryProcessed());
  }
  removeSecondaryProcessed(): void {
    this.SecondaryProcessed = this.AuthForm.get('SecondaryProcessed') as FormArray;
    this.SecondaryProcessed.removeAt(1);
  }
  addMainProcessed(): void {
    this.MainProcessed = this.AuthForm.get('MainProcessed') as FormArray;
    this.MainProcessed.push(this.createMainProcesed());
  }
  removeMainProcessed(): void {
    this.MainProcessed = this.AuthForm.get('MainProcessed') as FormArray;
    this.MainProcessed.removeAt(1);
  }
  onSubmit(formValue) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.AuthForm.invalid) {
      return;
    }

  }
}
