import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[appTopBarState]'
})

export class TopBarStateDirective {

    constructor(private renderer: Renderer2, private elRef: ElementRef) {}

    @HostListener('window:scroll')
    showNavbar(event): void {
      if (window.scrollY > 100) {
        this.renderer.addClass(this.elRef.nativeElement, 'bar-change');
      } else {
        this.renderer.removeClass(this.elRef.nativeElement, 'bar-change');
      }
    }
}
