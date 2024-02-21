import { ApplicationConfig } from '@angular/core';

import { provideDaterangepickerLocale } from 'ngx-daterangepicker-bootstrap';

export const appConfig: ApplicationConfig = {
  providers: [
    provideDaterangepickerLocale({
      separator: ' - ',
      applyLabel: 'Okay',
    }),
  ],
};
