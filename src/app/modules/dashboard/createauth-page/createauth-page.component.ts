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
  Goods: FormArray;
  MainProcessed: FormArray;
  SecondaryProcessed: FormArray;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

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

  // Starts: Goods actions
  public addGoods(): void {
    this.Goods = this.AuthForm.get('Goods') as FormArray;
    this.Goods.push(this.createGoods());
  }

  public removeGoods(): void {
    this.Goods = this.AuthForm.get('Goods') as FormArray;
    this.Goods.removeAt(1);
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
    this.MainProcessed = this.AuthForm.get('MainProcessed') as FormArray;
    this.MainProcessed.push(this.createMainProcesed());
  }

  public removeMainProcessed(): void {
    this.MainProcessed = this.AuthForm.get('MainProcessed') as FormArray;
    this.MainProcessed.removeAt(1);
  }
  // Ends: Main Processed actions

  // Starts: Secondary Processed actions
  public addSecondaryProcessed(): void {
    const ctrl = <FormArray>this.AuthForm.get('SecondaryProcessed') as FormArray;
    ctrl.push(this.createSecondaryProcessed());
  }

  public removeSecondaryProcessed(idx: number): void {
    const ctrl = <FormArray>this.AuthForm.get('SecondaryProcessed') as FormArray;
    ctrl.removeAt(idx);
  }
  // Endss: Secondary Processed actions

  public onSubmit(formValue) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.AuthForm.invalid) {
      return;
    }
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
