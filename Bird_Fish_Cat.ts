import {Animals} from "./Animals"
export class Cats implements Animals{
    beauty:string = "very beutyful!"
    tail: boolean = true;
    move: string = 'walking,runing,jumping';
    voice():string{
        return "Yes, i said 'meow' over a second ago, where is my lanch?";
        
    }
}
export class Birds implements Animals{
    
     tail: boolean = true;
     move: string = 'flying, walking' 
     voice():string{ 
         return "Karrrr-karrrr";
     }      
}
export class Fishs implements Animals{
    tail:boolean = true;
    move:string = 'swiming, deving'
    voice():string{
        return"'4r7hkbvu!!9348nnv'...says something in whale"
    }
}
