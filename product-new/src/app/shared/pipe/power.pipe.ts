import { Pipe, PipeTransform } from '@angular/core';

//{{2|Power}} 2^1
//{{3|Power:2}} //3^2

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exponent:number=1): number {
    console.log('PowerPipe called ', value, exponent)
    return Math.pow(value,exponent);
  }

}
