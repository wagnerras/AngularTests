import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActionDirective } from './action.directive';
import { ActionDirectiveModule } from './action.module';

describe(ActionDirective.name, () => {

    let fixture: ComponentFixture<ActionDirectiveTestComponent>;
    let component: ActionDirectiveTestComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ActionDirectiveTestComponent],
            imports: [ActionDirectiveModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ActionDirectiveTestComponent);
        component = fixture.componentInstance;
    });

    it(`(D)(@output appAction) should emit event with payload when enter key is pressed`, () => {
       // const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy');
        const divEl: HTMLElement = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
        const event = new KeyboardEvent('keyup', { key: 'Enter' });
        divEl.dispatchEvent(event);
        expect(component.hasEvent()).toBeTrue();
    });

    it(`(D)(@output appAction) should emit event with payload when clicked`, () => {
        const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy');
        divEl.click();
        expect(component.hasEvent()).toBeTrue();
    });

    it(`(D)(@output appAction) should emit event with payload when clicked or key is pressed`, () => {
        const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy');
        const event = new KeyboardEvent('keyup', { key: 'Enter' });
        divEl.dispatchEvent(event);
        expect(component.hasEvent()).withContext('key up event').toBeTrue();
        component.resetEvent();
        divEl.click();
        expect(component.hasEvent()).withContext('click event').toBeTrue();
    });

});


@Component({
    template: `<div class="dummy" (appAction)="actionHandler($event)"></div>`
})

class ActionDirectiveTestComponent {
    private event: Event = null;
    public actionHandler(event: Event): void {
        this.event = event;
    }

    public hasEvent(): boolean {
        return !!this.event;
    }

    public resetEvent() {
        this.event = null;
    }
}