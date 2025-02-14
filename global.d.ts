
import type { EventBus } from './src/eventBus'

declare global {
    interface Window {
        eventBus?: EventBus;
    }
}