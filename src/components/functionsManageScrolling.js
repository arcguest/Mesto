function preventScrollingWheelFunc(e) {
    e.preventDefault();     
}

function preventScrollingArrowFunc(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
    }
}

function hideScrollingBarFunc(e) {
    bodyElement.style.overflow = 'hidden';
}

function activateScrolling(e) {
    window.removeEventListener('wheel', preventScrollingWheelFunc, { passive: false });
    window.removeEventListener('keydown', preventScrollingArrowFunc, { passive: false });
    bodyElement.style.overflow = 'auto';
}

