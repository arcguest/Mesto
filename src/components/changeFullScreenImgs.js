imageFullArrowsArray.forEach((btn) => {
    btn.onclick = () => {
        let nextIndex;
        if (btn.classList.contains('button__right')) {          
            if (pickedCardId <= 0) {
                nextIndex = cardsArr.length-1;
                pickedCardId = cardsArr.length-1;
            } else {
                nextIndex = pickedCardId-1;
                pickedCardId -= 1;
            }
            imageFullScreenImage.src = `${cardsArr[nextIndex].cardImg}`;
            imageFullScreenTitle.textContent = cardsArr[nextIndex].cardTitle;
        } else if (btn.classList.contains('button__left')) {
            if (cardsArr.length <= pickedCardId+1) {
                nextIndex = 0;
                pickedCardId = 0;
            } else {
                nextIndex = pickedCardId+1;
                pickedCardId += 1;
            }
            imageFullScreenImage.src = `${cardsArr[nextIndex].cardImg}`;
            imageFullScreenTitle.textContent = cardsArr[nextIndex].cardTitle;
        }
    }
})

document.addEventListener('keyup', switchImagesByKeyFunc);
imageFullScreenContainer.addEventListener('touchstart', switchImagesBySwipeFunc, { passive: false });
imageFullScreenContainer.addEventListener('touchmove', switchImagesBySwipeFunc, { passive: true });
imageFullScreenContainer.addEventListener('touchend', switchImagesBySwipeFunc, { passive: false });
imageFullScreenContainer.addEventListener('wheel', switchImagesByWheelFunc, { passive: false });

