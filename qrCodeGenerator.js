import { api, LightningElement } from 'lwc';
import qrcode from './qrcode';

export default class QrCodeGenerator extends LightningElement {
  

    renderedCallback() {
        console.log('QR Code generated 1');
        const qrCodeGenerated = new qrcode(0, 'H');
        console.log('Base URL is '+window.location.href);
        qrCodeGenerated.addData(window.location.href);
        qrCodeGenerated.make();
        let element = this.template.querySelector(".qrCode");
        element.innerHTML = qrCodeGenerated.createSvgTag({});
        console.log('QR Code generated 2');
   }
}


