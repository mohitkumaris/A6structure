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
import {CreateAuthorizationService} from '../../../shared/services/createauthorization/createAuthorization.service';
import {CustomProceduresInterface} from '../../../shared/interfaces/createAuthorization/customProcedures-interface';
import {AlertClass} from '../../../shared/services/common/alert';

@Component({
  selector: 'app-createauth-page',
  templateUrl: './createauth-page.component.html',
  styleUrls: ['./createauth-page.component.scss'],
  providers: [CreateAuthorizationService, AlertClass]
})
export class CreateauthPageComponent implements OnInit {

  AuthForm: FormGroup;
  CustomsProcedure: CustomProceduresInterface[];
  public submitted = false;
  public iGood = 0;

  constructor(private formBuilder: FormBuilder, private createAuthService: CreateAuthorizationService, private alert: AlertClass) {
  }

  ngOnInit() {
    this.getCustomProcs();
    this.AuthForm = this.formBuilder.group({
      Authorization: [{value: '', disabled: true}],
      GeographicalValidity: ['', Validators.required],
      StartDate: ['', Validators.required],
      ExpirationDate: ['', Validators.required],
      ReferenceAmount: ['', null],
      CurrencyUsed: ['', null],
      Goods: this.formBuilder.array([this.createGoods()]),
      MainProcessed: this.formBuilder.array([this.createMainProcesed()]),
      OfficesofPlacement: this.formBuilder.array([this.createOfficesofClearance()]),
      OfficesofClearance: this.formBuilder.array([this.createOfficesofClearance()]),
      OfficesofControl: this.formBuilder.array([this.createOfficesofControl()])
    });
  }

  public getCustomProcs(): void {
    this.createAuthService.getCustomProcs()
      .subscribe((res) => {
        this.CustomsProcedure = res as CustomProceduresInterface[];
      }, (error) => {
        this.alert.openModal(error, 'Error');
      });
  }


  // Starts: Goods actions
  public addGoods(): void {
    const ctrl = this.AuthForm.get('Goods') as FormArray;
    ctrl.push(this.createGoods());

  }

  public removeGoods(item): void {
    const ctrl = this.AuthForm.get('Goods') as FormArray;
    ctrl.removeAt(item);
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

  // Add office of Placement
  public addOfficesofPlacement(): void {
    const ctrl = this.AuthForm.get('OfficesofPlacement') as FormArray;
    ctrl.push(this.createOfficesofPlacement());
  }

  public removeOfficesofPlacement(i): void {
    const ctrl = this.AuthForm.get('OfficesofPlacement') as FormArray;
    ctrl.removeAt(i);
  }

  // End office of Placement

  // Add office of Clearance
  public addOfficesofClearance(): void {
    const ctrl = this.AuthForm.get('OfficesofClearance') as FormArray;
    ctrl.push(this.createOfficesofClearance());
  }

  public removeOfficesofClearance(i): void {
    const ctrl = this.AuthForm.get('OfficesofClearance') as FormArray;
    ctrl.removeAt(i);
  }

  // End office of Clearance

  // Add Offices of Control
  public addOfficesofControl(): void {
    const ctrl = this.AuthForm.get('OfficesofControl') as FormArray;
    ctrl.push(this.createOfficesofControl());
  }

  public removeOfficesofControl(i): void {
    const ctrl = this.AuthForm.get('OfficesofControl') as FormArray;
    ctrl.removeAt(i);
  }

  // End office of Control

  public onSubmit(formValue) {
    this.submitted = true;
    if (this.AuthForm.invalid) { return; }
    console.log(this.AuthForm.value);
  }

  // Creation of Elements those are adding dynamically
  public createGoods(): FormGroup {
    return this.formBuilder.group({
      CodeNC: '',
      Designation: '',
      Quantity: [null, Validators.required],
      Unit: [null, Validators.required],
      Period: [null, Validators.required],
      UnitOfMeasure: [null, Validators.required],
      Number: [null, Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      Value: [null, Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
    });
  }

  private createMainProcesed(): FormGroup {
    return this.formBuilder.group({
      CodeNC: '',
      Designation: '',
      RateofReturn: [{value: '100%', disabled: true}, Validators.required],
      Ratedeterminationmethod: '',
      ProcessingPlace: '',
      SecondaryProcessed: this.formBuilder.array([this.createSecondaryProcessed()])
    });
  }

  private createSecondaryProcessed(): FormGroup {
    return this.formBuilder.group({
      CodeNCSecondary: '',
      DesignationSecondary: '',
      RateofReturnSecondary: [{value: '100%', disabled: true}, Validators.required],
      RatedeterminationmethodSecondary: '',
    });
  }

  private createOfficesofPlacement(): FormGroup {
    return this.formBuilder.group({
      OfficesPlacement: ''
    });
  }

  private createOfficesofClearance(): FormGroup {
    return this.formBuilder.group({
      OfficesClearance: ''
    });
  }

  private createOfficesofControl(): FormGroup {
    return this.formBuilder.group({
      OfficesControl: ''
    });
  }

// Ends Creation
  // convenience getter for easy access to form fields
  get f() {
    return this.AuthForm.controls;
  }
}
