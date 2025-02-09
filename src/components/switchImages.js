import { imageFullScreenContainer, imageFullArrowsArray, imageFullScreenImage, imageFullScreenTitle, imageFullScreenWrapper, cards, form, touchManager, buttonLeft, buttonRight } from "./variables";

export function setupImagesSwitching() {
    imageFullArrowsArray.forEach((btn) => {
        btn.onclick = () => {
            let nextIndex;
            if (btn.classList.contains('button__right')) {
                if (cards.pickedCardId <= 0) {
                    nextIndex = cards.fullList.length - 1;
                    cards.pickedCardId = cards.fullList.length - 1;
                } else {
                    nextIndex = cards.pickedCardId - 1;
                    cards.pickedCardId -= 1;
                }
                imageFullScreenImage.src = `${cards.fullList[nextIndex].cardImg}`;
                imageFullScreenTitle.textContent = cards.fullList[nextIndex].cardTitle;
            } else if (btn.classList.contains('button__left')) {
                if (cards.fullList.length <= cards.pickedCardId + 1) {
                    nextIndex = 0;
                    cards.pickedCardId = 0;
                } else {
                    nextIndex = cards.pickedCardId + 1;
                    cards.pickedCardId += 1;
                }
                imageFullScreenImage.src = `${cards.fullList[nextIndex].cardImg}`;
                imageFullScreenTitle.textContent = cards.fullList[nextIndex].cardTitle;
            }
        }
    })

    document.addEventListener('keyup', switchImagesByKey);
    imageFullScreenContainer.addEventListener('touchstart', switchImagesBySwipe, { passive: false });
    imageFullScreenContainer.addEventListener('touchmove', switchImagesBySwipe, { passive: true });
    imageFullScreenContainer.addEventListener('touchend', switchImagesBySwipe, { passive: false });
    imageFullScreenContainer.addEventListener('wheel', switchImagesByWheel, { passive: false });
}

export function switchImagesByKey(e) {
    let nextIndex;
    if (e.key === 'ArrowLeft') {
        if (!form.classList.contains('body__form_disabled')) return;

        if (cards.fullList.length <= cards.pickedCardId + 1) {
            nextIndex = 0;
            cards.pickedCardId = 0;
        } else {
            nextIndex = cards.pickedCardId + 1;
            cards.pickedCardId += 1;
        }
        imageFullScreenImage.src = `${cards.fullList[nextIndex].cardImg}`;
        imageFullScreenTitle.textContent = cards.fullList[nextIndex].cardTitle;
    } else if (e.key === 'ArrowRight') {
        if (!form.classList.contains('body__form_disabled')) return;

        if (cards.pickedCardId <= 0) {
            nextIndex = cards.fullList.length - 1;
            cards.pickedCardId = cards.fullList.length - 1;
        } else {
            nextIndex = cards.pickedCardId - 1;
            cards.pickedCardId -= 1;
        }
        imageFullScreenImage.src = `${cards.fullList[nextIndex].cardImg}`;
        imageFullScreenTitle.textContent = cards.fullList[nextIndex].cardTitle;
    }
}

export function switchImagesBySwipe(e) {
    let deltaX;
    let nextIndex;
    const threshold = 40;
    const minScale = 0.6;
    const minTranslate = 40;

    if (e.type === 'touchstart') {
        touchManager.touchStart = e.changedTouches[0].screenX;
    } else if (e.type === 'touchmove' && touchManager.touchStart !== null) {
        const currentTouch = e.changedTouches[0].screenX;
        touchManager.swipeLength = currentTouch - touchManager.touchStart;
        const scaleValue = Math.max(minScale, 1 - Math.abs(touchManager.swipeLength) / 100);
        const translateValue = Math.min(minTranslate, 0 + Math.abs(touchManager.swipeLength));
        const direction = Math.sign(touchManager.swipeLength);
        imageFullScreenWrapper.style.transform = `scale(${scaleValue}) translateX(${direction * translateValue}%)`;
    } else if (e.type === 'touchend' && touchManager.touchStart !== null) {
        touchManager.touchEnd = e.changedTouches[0].screenX;
        deltaX = touchManager.touchEnd - touchManager.touchStart;
        touchManager.touchStart = null;
        imageFullScreenWrapper.style.transform = 'scale(1)';
        buttonRight.style.flex = 1;
        buttonLeft.style.flex = 1;
    }

    if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
            if (cards.pickedCardId <= 0) {
                nextIndex = cards.fullList.length - 1;
                cards.pickedCardId = cards.fullList.length - 1;
            } else {
                nextIndex = cards.pickedCardId - 1;
                cards.pickedCardId -= 1;
            }

            if (!nextIndex || nextIndex === NaN) return;

            imageFullScreenImage.src = `${cards.fullList[nextIndex].cardImg}`;
            imageFullScreenTitle.textContent = cards.fullList[nextIndex].cardTitle;
        } else {
            if (cards.fullList.length <= cards.pickedCardId + 1) {
                nextIndex = 0;
                cards.pickedCardId = 0;
            } else {
                nextIndex = cards.pickedCardId + 1;
                cards.pickedCardId += 1;
            }

            if (!nextIndex || nextIndex === NaN) return;

            imageFullScreenImage.src = `${cards.fullList[nextIndex].cardImg}`;
            imageFullScreenTitle.textContent = cards.fullList[nextIndex].cardTitle;
        }
    }
}

export function switchImagesByWheel(e) {
    let nextIndex;
    if (e.deltaY < 0) {
        if (cards.fullList.length <= cards.pickedCardId + 1) {
            nextIndex = 0;
            cards.pickedCardId = 0;
        } else {
            nextIndex = cards.pickedCardId + 1;
            cards.pickedCardId += 1;
        }
        imageFullScreenImage.src = `${cards.fullList[nextIndex].cardImg}`;
        imageFullScreenTitle.textContent = cards.fullList[nextIndex].cardTitle;
    } else if (e.deltaY > 0) {
        if (cards.pickedCardId <= 0) {
            nextIndex = cards.fullList.length - 1;
            cards.pickedCardId = cards.fullList.length - 1;
        } else {
            nextIndex = cards.pickedCardId - 1;
            cards.pickedCardId -= 1;
        }
        imageFullScreenImage.src = `${cards.fullList[nextIndex].cardImg}`;
        imageFullScreenTitle.textContent = cards.fullList[nextIndex].cardTitle;
    }
}

