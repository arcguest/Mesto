function switchImagesByKeyFunc(e) {
    let nextIndex;
    if (e.key === 'ArrowLeft') {
        if (!form.classList.contains('body__form_disabled')) return;

        if (cardsArr.length <= pickedCardId + 1) {
            nextIndex = 0;
            pickedCardId = 0;
        } else {
            nextIndex = pickedCardId + 1;
            pickedCardId += 1;
        }
        imageFullScreenImage.src = `${cardsArr[nextIndex].cardImg}`;
        imageFullScreenTitle.textContent = cardsArr[nextIndex].cardTitle;
    } else if (e.key === 'ArrowRight') {
        if (!form.classList.contains('body__form_disabled')) return;
        
        if (pickedCardId <= 0) {
            nextIndex = cardsArr.length - 1;
            pickedCardId = cardsArr.length - 1;
        } else {
            nextIndex = pickedCardId - 1;
            pickedCardId -= 1;
        }
        imageFullScreenImage.src = `${cardsArr[nextIndex].cardImg}`;
        imageFullScreenTitle.textContent = cardsArr[nextIndex].cardTitle;
    }
}

function switchImagesBySwipeFunc(e) {
    let deltaX;
    let nextIndex;
    const threshold = 40;
    const minScale = 0.6;
    const minTranslate = 40;

    if (e.type === 'touchstart') {
        touchStart = e.changedTouches[0].screenX;
    } else if (e.type === 'touchmove' && touchStart !== null) {
        const currentTouch = e.changedTouches[0].screenX;
        swipeLength = currentTouch - touchStart;
        const scaleValue = Math.max(minScale, 1 - Math.abs(swipeLength) / 100);
        const translateValue = Math.min(minTranslate, 0 + Math.abs(swipeLength));
        const direction = Math.sign(swipeLength);
        imageFullScreenWrapper.style.transform = `scale(${scaleValue}) translateX(${direction*translateValue}%)`;
    } else if (e.type === 'touchend' && touchStart !== null) {
        touchEnd = e.changedTouches[0].screenX;
        deltaX = touchEnd - touchStart;
        touchStart = null;
        imageFullScreenWrapper.style.transform = 'scale(1)';
        buttonRight.style.flex = 1;
        buttonLeft.style.flex = 1;
    }

    if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
            if (pickedCardId <= 0) {
                nextIndex = cardsArr.length - 1;
                pickedCardId = cardsArr.length - 1;
            } else {
                nextIndex = pickedCardId - 1;
                pickedCardId -= 1;
            }

            if (!nextIndex || nextIndex === NaN) return;

            imageFullScreenImage.src = `${cardsArr[nextIndex].cardImg}`;
            imageFullScreenTitle.textContent = cardsArr[nextIndex].cardTitle;
        } else {
            if (cardsArr.length <= pickedCardId + 1) {
                nextIndex = 0;
                pickedCardId = 0;
            } else {
                nextIndex = pickedCardId + 1;
                pickedCardId += 1;
            }

            if (!nextIndex || nextIndex === NaN) return;

            imageFullScreenImage.src = `${cardsArr[nextIndex].cardImg}`;
            imageFullScreenTitle.textContent = cardsArr[nextIndex].cardTitle;
        }
    }
}

function switchImagesByWheelFunc(e) {
    let nextIndex;
    if (e.deltaY < 0) {
        if (cardsArr.length <= pickedCardId + 1) {
            nextIndex = 0;
            pickedCardId = 0;
        } else {
            nextIndex = pickedCardId + 1;
            pickedCardId += 1;
        }
        imageFullScreenImage.src = `${cardsArr[nextIndex].cardImg}`;
        imageFullScreenTitle.textContent = cardsArr[nextIndex].cardTitle;
    } else if (e.deltaY > 0) {
        if (pickedCardId <= 0) {
            nextIndex = cardsArr.length - 1;
            pickedCardId = cardsArr.length - 1;
        } else {
            nextIndex = pickedCardId - 1;
            pickedCardId -= 1;
        }
        imageFullScreenImage.src = `${cardsArr[nextIndex].cardImg}`;
        imageFullScreenTitle.textContent = cardsArr[nextIndex].cardTitle;
    }
}

