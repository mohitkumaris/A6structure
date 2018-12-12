import {Pipe, PipeTransform} from '@angular/core';
import {formatDate} from '@angular/common';
import {SessionService} from '../services/pipeService/sessionService';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {
  constructor(private session: SessionService) {
  }

  transform(value: any, format: string) {
    if (!value) {
      return '';
    }
    if (!format) {
      return {format: 'shortDate'};
    }
    return formatDate(value, format, this.session.locale);

  }
}
