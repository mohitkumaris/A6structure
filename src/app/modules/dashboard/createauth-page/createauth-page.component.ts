/*************************************************************************************
 ** Goods to be Processed  :1 or more transformations with following information for each
 ** Main Processed Product
 ** Code NC : drop-down populated with Product Id values (from RITA DB)
 ** Designation : populated with Product description (from RITA DB)
 ** Rate of Return : non-editable,  defaulted to 100%
 ** Rate determination method :??
 ** Secondary Product(s) : 1 or more with following information for each
 ** Code NC : drop-down populated with Product Id values (from RITA DB)
 ** Designation : populated with Product description (from RITA DB)
 ** Rate of Return : non-editable,  defaulted to 100%
 ** Rate determination method :??
 ** Processing Place : drop-down populated with Processing Places owned by Operator
 *************************************************************************************/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-createauth-page',
  templateUrl: './createauth-page.component.html',
  styleUrls: ['./createauth-page.component.scss']
})
export class CreateauthPageComponent implements OnInit {

  AuthForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.AuthForm = this.formBuilder.group({
      Authorization: '',
      CustomsProcedure: '',
      GeographicalValidity: '',
      StartDate: '',
      ExpirationDate: '',
      Goods: this.formBuilder.array([this.createGoods()]),
      MainProcessed: this.formBuilder.array([this.createMainProcesed()])
    });
  }

  // Starts: Goods actions
  public addGoods(): void {
    const ctrl = this.AuthForm.get('Goods') as FormArray;
    ctrl.push(this.createGoods());
  }

  public removeGoods(): void {
    const ctrl = this.AuthForm.get('Goods') as FormArray;
    ctrl.removeAt(1);
  }
  // Ends: Goods actions

  // Starts: Main Processed actions
  public addMainSecondaryProcessed(mainProcessIdx: number): void {
    const mainProcessedCtrl = this.AuthForm.get('MainProcessed') as FormArray;
    const secondaryProcessedCtrl = mainProcessedCtrl.controls[0].get('SecondaryProcessed') as FormArray;
    secondaryProcessedCtrl.push(this.createSecondaryProcessed());
  }

  public removeMainSecondaryProcessed(mainProcessIdx: number): void {
    const mainProcessedCtrl = this.AuthForm.get('MainProcessed') as FormArray;
    const secondaryProcessedCtrl = mainProcessedCtrl.controls[0].get('SecondaryProcessed') as FormArray;
    secondaryProcessedCtrl.removeAt(mainProcessIdx);
  }

  public addMainProcessed(): void {
    const ctrl = this.AuthForm.get('MainProcessed') as FormArray;
    ctrl.push(this.createMainProcesed());
  }

  public removeMainProcessed(): void {
    const ctrl = this.AuthForm.get('MainProcessed') as FormArray;
    ctrl.removeAt(1);
  }
  // Ends: Main Processed actions

  public save() {
    if (this.AuthForm.invalid) { return; }
    console.log(this.AuthForm.value);
  }

  private createGoods(): FormGroup {
    return this.formBuilder.group({
      CodeNC: '',
      Designation: '',
      Quantity: '',
      Unit: '',
      UnitOfMeasure: '',
      Number: '',
      Value: ''
    });
  }

  private createMainProcesed(): FormGroup {
    return this.formBuilder.group({
      CodeNC: '',
      Designation: '',
      RateofReturn: '100%',
      Ratedeterminationmethod: '',
      ProcessingPlace: '',
      SecondaryProcessed: this.formBuilder.array([this.createSecondaryProcessed()])
    });
  }

  private createSecondaryProcessed(): FormGroup {
    return this.formBuilder.group({
      CodeNCSecondary: '',
      DesignationSecondary: '',
      RateofReturnSecondary: '100%',
      RatedeterminationmethodSecondary: '',
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.AuthForm.controls;
  }
}
