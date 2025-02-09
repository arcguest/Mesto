import { bodyElement } from "./variables";

export function preventScrollingWheel(e) {
    e.preventDefault();     
}

export function preventScrollingArrow(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
    }
}

export function hideScrollingBar() {
    bodyElement.style.overflow = 'hidden';
}

export function activateScrolling() {
    window.removeEventListener('wheel', preventScrollingWheel, { passive: false });
    window.removeEventListener('keydown', preventScrollingArrow, { passive: false });
    bodyElement.style.overflow = 'auto';
}

