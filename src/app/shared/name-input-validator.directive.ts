import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';
import { PlayerService } from './player.service';

@Directive({
  selector: '[appInputValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: inputNameValidatorDirective,
    multi: true
  }]
})
export class inputNameValidatorDirective implements Validator {

  constructor(private playerService: PlayerService) { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    this.playerService.checkIfNameExists(control.value)
    .subscribe(response => {
      if (response.length !== 0) {
        return { 'nameTaken': 'Name already taken' }
      }
      return null;
    });
    return null;
  }
}