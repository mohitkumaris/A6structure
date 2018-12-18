import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserInterface} from '../../../shared/interfaces/user/user-interface';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {AlertClass} from '../../../shared/services/common/alert';
import {SessionService} from '../../../shared/services/pipeService/sessionService';




@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
  providers: [AuthService, AlertClass]
})
export class RegistrationPageComponent implements OnInit {
  registerForm: FormGroup;
  loading: any;
  submitted = false;
  show = false;
  today = new Date();
  val = 123.45;
  name = 'mohit kumar';
  posts: any;
  constructor(
    private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router, private alert: AlertClass, private sessionService: SessionService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      fName: [null, Validators.required],
      lName: [null, Validators.required]
    });
    this.authService.getUser().subscribe((response) => {
      this.posts = response;
      this.loading = false;
    }, (error) => {
      this.loading = false;
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  showOrganization(event: any) {
    this.show = true ? event.target.value === 'Operator' : false;
  }

  // Date pipes
  norway() {
    this.sessionService.registerCulture('nb-NO');
    this.refreshValues();
  }

  sweden() {
    this.sessionService.registerCulture('sv-SE');
    this.refreshValues();
  }

  private refreshValues() {
    this.today = new Date();
    this.val++;
  }


  onSubmit(formValue) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


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
