import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CopyToClipboardService {

  public copyText(text: string): void {
    const input: HTMLInputElement = this.createInputElement();
    input.style['opacity'] = '0';
    input.style['text-indent'] = '-9999px';
    document.body.appendChild(input);
    this.setInputValue(input, text);
    this.selectInput(input);
    document.execCommand('copy');
    this.removeElement(input);
  }

  private createInputElement(): HTMLInputElement {
    return document.createElement('input');
  }

  private selectInput(element: HTMLInputElement): void {
    element.select();
    element.setSelectionRange(0, 99999);
  }

  private setInputValue(element: HTMLInputElement, value: string): void {
    element.value = value;
  }

  private removeElement(element: HTMLElement): void {
    element.blur();
    element.remove();
  }
}
