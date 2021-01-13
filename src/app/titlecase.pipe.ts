import { stringify } from "@angular/compiler/src/util";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titlecasePipe'
})



export class TitleCasePipe implements PipeTransform{
    transform(value: string, args?: any){
        if(value && value.length == 0) return null
        let titleToReturn = '';
        let words = value?.split(' ')
        words?.forEach((word, index) => {
            let w = word.toLowerCase();
            if((w === 'of' || w== 'the') && index > 0){
                titleToReturn += w + ' ';
            }
            else{
                titleToReturn += w[0].toUpperCase() + w.substring(1) + ' ';
            }
        })
        return titleToReturn;
    }
} 