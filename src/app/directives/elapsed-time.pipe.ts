import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'elapsedTime' })
export class ElapsedTimePipe implements PipeTransform {
  transform(input: number): string {
    let elapsedTime: any;
    const eventTime = moment(input);
    const elapsedTimeObject = {
      years: NaN,
      months: NaN,
      days: NaN
    };

    if (input && eventTime.isValid()) {
      elapsedTime = moment().diff(eventTime, 'years');
      if (elapsedTime) {
        elapsedTimeObject.years = elapsedTime;
        eventTime.add(elapsedTimeObject.years, 'years');
      }
      elapsedTime = moment().diff(eventTime, 'months');
      if (elapsedTime || (!elapsedTime && elapsedTimeObject.years)) {
        elapsedTimeObject.months = elapsedTime;
        eventTime.add(elapsedTimeObject.months, 'months');
      }
      elapsedTime = moment().diff(eventTime, 'days');
      if (elapsedTime || (!elapsedTime && elapsedTimeObject.months)) {
        elapsedTimeObject.days = elapsedTime;
        eventTime.add(elapsedTimeObject.days, 'days');
      }
      elapsedTime = elapsedTimeObject;
    }

    const yearsTime = elapsedTime.years ? `${elapsedTime.years}yr. ` : '';
    const monthsTime = elapsedTime.months ? `${elapsedTime.months}mo. ` : '';
    const daysTime = elapsedTime.days && !elapsedTime.years ? `${elapsedTime.days}d. ` : '';

    return `${yearsTime}${monthsTime}${daysTime}`;

  }
}
