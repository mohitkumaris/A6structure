import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserInterface} from '../../../shared/interfaces/user/user-interface';
import {Router} from '@angular/router';
import {DataService} from '../../../shared/services/data/data.service';



@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
  providers: [DataService]
})
export class RegistrationPageComponent {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  show = false;

  constructor(
    private formBuilder: FormBuilder, private dataService: DataService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      fName: [null, Validators.required],
      lName: [null, Validators.required]
    });
  }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  showOrganization(event: any) {
    this.show = true ? event.target.value === 'Operator' : false;
  }

  onSubmit(formValue) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // this.loading = true;
    this.dataService.registerUser(formValue)
      .subscribe(
        resp => {
          console.log('resp ' + resp);
          //this.router.navigate(['/login']);
        },
        error => {
          console.error(error);
        });

    /*this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });*/
  }

}
