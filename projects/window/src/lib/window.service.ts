import { InjectionToken } from '@angular/core';
import { PlatformService } from './platform.service';

export const WINDOW_SERVICE = new InjectionToken('WINDOW_SERVICE');

export function checkBrowserEnvironmentFactory(
  platformService: PlatformService,
): WindowService {
  if (platformService.isBrowser) {
    return new WindowService(window);
  } else {
    throw new Error('Not in Browser Environment');
  }
}

export class WindowService {
  constructor(private nativeWindow: Window) {}

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
