import { AsyncValidator, AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Directive } from '@angular/core';
import { PlayerService } from './player.service';
import {Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appInputValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: inputNameValidatorDirective,
    multi: true
  }]
})
export class inputNameValidatorDirective implements AsyncValidator {

  constructor(private playerService: PlayerService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.playerService.checkIfNameExists(control.value.trim()).pipe(
      map((result) => result.length ? { nameTaken: 'already taken' } : null)
    );
  }
}