import { hideModal } from "./manageModals";
import { removeCardConfirmed } from "./removeCards";
import { confirmBtnCardRmvBtnArray } from "./variables";

export function confirmCardRemoving() {
    confirmBtnCardRmvBtnArray.forEach((btn) => {
        btn.onclick = () => {
            if (btn.classList.contains("body__confirmation_card-removing_btn_yes")) {
                removeCardConfirmed();
                hideModal();
            } else {
                hideModal();
            }
        }
    })
}
