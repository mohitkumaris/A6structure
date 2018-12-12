import {Pipe, PipeTransform} from '@angular/core';
import {formatDate} from '@angular/common';
import {SessionService} from '../services/pipeService/sessionService';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  constructor(private session: SessionService) {
  }

  transform(value: string, args: string[]): any {
    if (!value) {
      return value;
    }

    return value.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
