import {ToastOptions} from 'ng2-toastr';

export class CustomOption extends ToastOptions {
  animate = 'fade'; // you can override any options available
  newestOnTop = true;
  showCloseButton = false;
}