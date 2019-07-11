import { Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export function checkBrowserEnvironmentFactory(
  platformid: object,
): WindowService {
  if (isPlatformBrowser(platformid)) {
    return new WindowService(window);
  } else {
    throw new Error('Not in Browser Environment');
  }
}

@Injectable({
  providedIn: 'root',
  useFactory: checkBrowserEnvironmentFactory,
  deps: [PLATFORM_ID],
})
export class WindowService {
  constructor(private nativeWindow) {}

  get window(): Window {
    return this.nativeWindow;
  }

  get document(): Document {
    return this.nativeWindow.document;
  }

  get domain(): string {
    return this.nativeWindow.document.getElementsByTagName('base')[0].href;
  }

  get location(): Location | null {
    return this.nativeWindow.document.location;
  }

  createHiddenIframe(): HTMLIFrameElement {
    let iframe = this.nativeWindow.document.createElement('iframe');
    iframe.style.display = 'none';
    return iframe;
  }

  appendToBody(element: HTMLElement): void {
    this.nativeWindow.document.body.appendChild(element);
  }

  removeFromBody(element: HTMLElement): void {
    this.nativeWindow.document.body.removeChild(element);
  }
}
