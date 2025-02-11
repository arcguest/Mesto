import { setImages } from './components/setImages';
import { setCardTemplate } from './components/setCardTemplate';
import { confirmCardRemoving } from './components/confirmCardRemoving';
import { changeModalVisibility } from './components/manageModals';
import { saveFormData } from './components/manageFormData';
import { setupImagesSwitching } from './components/switchImages';

export function App() {
    setImages();
    setCardTemplate();
    confirmCardRemoving()
    saveFormData();
    changeModalVisibility();
    setupImagesSwitching();
}
