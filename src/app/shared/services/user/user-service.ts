import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../../interfaces/user/user-interface';
import {Restservice} from '../restservice';
import {DataServices} from '../dataservices';
const restService = new Restservice();
@Injectable()
export class UserService {
    constructor(private dataservice: DataServices) { }
   /* getAll() {
        return this.http.get<UserInterface[]>(restService.userUrl);
    }

    getById(_id: string) {
        return this.http.get(restService.userUrl + '/' + _id);
    }*/

    register(user: UserInterface) {
        return this.dataservice.Post(restService.registerUrl, user)
          .subscribe(() => {

          }, () => {

          });
    }
    login(user: UserInterface) {
      return this.dataservice.Post(restService.loginUrl, user)
        .subscribe(() => {

        }, () => {

        });
    }

   /* update(user: UserInterface) {
        return this.http.put(`${config.apiUrl}/users/` + user._id, user);
    }

    delete(_id: string) {
        return this.http.delete(`${config.apiUrl}/users/` + _id);
    }
    */
}
