import { ImagePreview } from '../../dist/js/image-preview.min.js';

function greetings() {
  const date = new Date();
  const hours = parseInt(date.getHours());
  if (hours >= 0 && hours < 12) {
    return 'Good morning !';
  } else if (hours >= 12 && hours < 18) {
    return 'Good afternoon !';
  } else if (hours >= 18 && hours < 24) {
    return 'Good evening !';
  }
}
const text = document.querySelector('.welcome-wrap').querySelector('.text p');
text.innerText = greetings();

const imgPreview = new ImagePreview('.upload-btn');
