import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[appNavState]'
})

export class NavStateDirective {

    constructor(private renderer: Renderer2, private elRef: ElementRef) {}

    @HostListener('window:scroll')
    showNavbar(event): void {
      if (window.scrollY > 200) {
        this.renderer.addClass(this.elRef.nativeElement, 'hide');
      } else {
        this.renderer.removeClass(this.elRef.nativeElement, 'hide');
      }
    }
}
