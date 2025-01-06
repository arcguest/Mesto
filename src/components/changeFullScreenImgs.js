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
document.addEventListener('touchstart', switchImagesBySwipeFunc);
document.addEventListener('touchend', switchImagesBySwipeFunc);

