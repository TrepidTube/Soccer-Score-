import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageStringifyService {
  dataUrl: string;
  
  constructor() {
    this.dataUrl = '';
  }

  toBase64(event) {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d');
    let img = new Image;
    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      this.dataUrl = canvas.toDataURL('image/jpg');
    }
    return this.dataUrl;
  }
}
