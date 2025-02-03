import * as eventBus from "./eventBus";

export function bootstrap() {
  return Promise.resolve();
}

export function mount() {
  (window as any).eventBus = eventBus; // Expose globally
  return Promise.resolve();
}

export function unmount() {
  delete (window as any).eventBus;
  return Promise.resolve();
}

// Auto-mount since it's always active
mount();
