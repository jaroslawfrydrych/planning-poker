import { Inject, Injectable } from '@angular/core';

import { ENVIRONMENT, Environment } from '@environments/utils';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements Environment {

  constructor(@Inject(ENVIRONMENT) public environment: Environment) {
  }

  get production(): boolean {
    return this.environment.production;
  }
}
