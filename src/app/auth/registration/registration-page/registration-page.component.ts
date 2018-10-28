import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserInterface} from '../../../shared/interfaces/user/user-interface';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {AlertClass} from '../../../shared/services/common/alert';




@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
  providers: [AuthService, AlertClass]
})
export class RegistrationPageComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  show = false;

  constructor(
    private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private alert: AlertClass) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      fName: [null, Validators.required],
      lName: [null, Validators.required]
    });
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


    this.authService.getUser().subscribe((response) => {
       console.log(response);
    });

    // this.loading = true;

    this.authService.registerUser(formValue)
      .subscribe(
        resp => {
          // console.log('resp ' + resp);
          // Works for 204 401 500 only
          // this.alert.openStatusModal(resp, 'Registration');

          // Demo puporse
          this.alert.openModal('Registration successful', 'Registration', '/login');
        },
        error => {
          // Show Error
          console.log(error);
          this.alert.openModal(error, 'Error');
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
