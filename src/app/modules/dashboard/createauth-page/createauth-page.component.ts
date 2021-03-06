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
import { FormBuilder, FormGroup, Validators, FormArray, Form, FormControl } from '@angular/forms';
import { CreateAuthorizationService } from '../../../shared/services/createauthorization/createAuthorization.service';
import { CustomProceduresInterface } from '../../../shared/interfaces/createAuthorization/customProcedures-interface';
import { AlertClass } from '../../../shared/services/common/alert';
import * as _ from 'lodash';

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
      Authorization: [{ value: '', disabled: true }],
      GeographicalValidity: ['', Validators.required],
      StartDate: ['', Validators.required],
      ExpirationDate: ['', Validators.required],
      ReferenceAmount: ['', null],
      CurrencyUsed: ['', null],
      Goods: this.formBuilder.array([this.createGoods()]),
      Quantity: [null, Validators.required],
      Unit: [null, Validators.required],
      Period: [null, Validators.required],
      UnitOfMeasure: [null, Validators.required],
      Number: [null, Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      Value: [null, Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
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

  // Validate Stsrt and End Date
  public checkDate(value) {
    const startDate = this.AuthForm.get('StartDate') as FormControl;
    console.log(value);
  }

  // End


  // Starts: Goods actions
  public addGoods(): void {
    const ctrl = this.AuthForm.get('Goods') as FormArray;
    ctrl.push(this.createGoods());

  }

  public removeGoods(): void {
    const ctrl = <FormArray>this.AuthForm.get('Goods');
    let item;
    // ctrl.removeAt(item);
    ctrl.removeAt(ctrl.value.indexOf(item));
  }
  // Ends: Goods actions

  // Starts: Main Processed actions
  public addMainSecondaryProcessed(mainProcessIdx: number): void {
    const mainProcessedCtrl = <FormArray>this.AuthForm.get('MainProcessed');
    const secondaryProcessedCtrl = <FormArray>mainProcessedCtrl.controls[0].get('SecondaryProcessed');
    secondaryProcessedCtrl.push(this.createSecondaryProcessed());
  }

  public removeMainSecondaryProcessed(mainProcessIdx: number): void {
    const mainProcessedCtrl = <FormArray>this.AuthForm.get('MainProcessed');
    const secondaryProcessedCtrl = <FormArray>mainProcessedCtrl.controls[0].get('SecondaryProcessed');
    secondaryProcessedCtrl.removeAt(secondaryProcessedCtrl.value.indexOf(mainProcessIdx));
  }

  public addMainProcessed(): void {
    const ctrl = <FormArray>this.AuthForm.get('MainProcessed');
    ctrl.push(this.createMainProcesed());
  }

  public removeMainProcessed(): void {
    const ctrl = <FormArray>this.AuthForm.get('MainProcessed');
    let item;
    ctrl.removeAt(ctrl.value.indexOf(item));
  }
  // Ends: Main Processed actions

  // Add office of Placement
  public addOfficesofPlacement(): void {
    const ctrl = <FormArray>this.AuthForm.get('OfficesofPlacement');
    ctrl.push(this.createOfficesofPlacement());
  }

  public removeOfficesofPlacement(): void {
    const ctrl = <FormArray>this.AuthForm.get('OfficesofPlacement');
    let item;
    ctrl.removeAt(ctrl.value.indexOf());
  }

  // End office of Placement

  // Add office of Clearance
  public addOfficesofClearance(): void {
    const ctrl = <FormArray>this.AuthForm.get('OfficesofClearance');
    ctrl.push(this.createOfficesofClearance());
  }

  public removeOfficesofClearance(): void {
    const ctrl = <FormArray>this.AuthForm.get('OfficesofClearance');
    let item;
    ctrl.removeAt(ctrl.value.indexOf(item));
  }

  // End office of Clearance

  // Add Offices of Control
  public addOfficesofControl(): void {
    const ctrl = <FormArray>this.AuthForm.get('OfficesofControl');
    ctrl.push(this.createOfficesofControl());
  }

  public removeOfficesofControl(): void {
    const ctrl = <FormArray>this.AuthForm.get('OfficesofControl');
    let item;
    ctrl.removeAt(ctrl.value.indexOf(item));
  }

  // End office of Control

  public onSubmit(formValue) {
    this.submitted = true;
    if (this.AuthForm.invalid) { return; }
    console.log(this.AuthForm.value);
    this.submitted = true;
    if (this.AuthForm.invalid) {
      return;
    }
    const userModel = {
      email: null,
      first_name: null,
      last_name: null
    };
    const user = localStorage.getItem('currentUser');
    const userData = _.pick(JSON.parse(user), _.keys(userModel));
    const authorizationData = _.assign({}, userData, formValue);
  }

  // Creation of Elements those are adding dynamically
  public createGoods(): FormGroup {
    return this.formBuilder.group({
      CodeNC: '',
      Designation: ''

    });
  }

  private createMainProcesed(): FormGroup {
    return this.formBuilder.group({
      CodeNC: '',
      Designation: '',
      RateofReturn: [{ value: '100%', disabled: true }, Validators.required],
      Ratedeterminationmethod: '',
      ProcessingPlace: '',
      SecondaryProcessed: this.formBuilder.array([this.createSecondaryProcessed()])
    });
  }

  private createSecondaryProcessed(): FormGroup {
    return this.formBuilder.group({
      CodeNCSecondary: '',
      DesignationSecondary: '',
      RateofReturnSecondary: [{ value: '100%', disabled: true }, Validators.required],
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
