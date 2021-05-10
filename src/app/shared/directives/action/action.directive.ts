import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[appAction]'
})

export class ActionDirective {
    @Output() public appAction = new EventEmitter();
    
    @HostListener('click', ['$event'])
    public handleClick(event: Event) {
    this.appAction.emit(event);
    }

    @HostListener('keyup', ['$event'])
    public handleKeyUp(event: KeyboardEvent) {
        this.appAction.emit(event);
    }
}