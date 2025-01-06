confirmBtnCardRmvBtnArray.forEach((btn) => {
    btn.onclick = () => {
        if (btn.classList.contains("body__confirmation_card-removing_btn_yes")) {
            removeCardConfirmed();
            hideModalFunc();
        } else {
            hideModalFunc();
        }
    }
})