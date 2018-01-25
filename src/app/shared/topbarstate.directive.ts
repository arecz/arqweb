import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[appTopBarState]'
})

export class TopBarStateDirective {

    constructor(private renderer: Renderer2, private elRef: ElementRef) {}

    @HostListener('window:scroll')
    showNavbar(event): void {
      if (window.scrollY > 50) {
        this.renderer.setStyle(this.elRef.nativeElement, 'bottom', '-25%');
      } else {
        this.renderer.removeStyle(this.elRef.nativeElement, 'bottom');
      }
    }
}
