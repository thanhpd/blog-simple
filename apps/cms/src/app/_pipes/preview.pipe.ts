import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preview'
})
export class PreviewPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const words = value.split(' ').slice(0, 10);
    return `${words.join(' ')}...`;
  }

}
