import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.page.html',
  styleUrls: ['./applications.page.scss'],
})
export class ApplicationsPage implements OnInit {

  constructor(private router: Router) { }

  firstLine = [
    {
      name: 'Adobe Photoshop 2021',
      image: '../../assets/icon/photoshop.png',
      requiredBits: ' Requerido um sistema operacional de 64 bits',
      minSO: 'Windows 10 Versão 1909 ou posterior; ',
      minCPU: 'Processador Intel® ou AMD compatível com 64 bits; processador de 2 GHz ou mais rápido com SSE 4.2 ou posterior',
      minRAM: '8 GB de RAM',
      minVideoCard: 'GTX 960 2GB',
      minStorage: '4 GB de espaço disponível',
      maxSO:'Windows 10 Versão 1909 ou posterior; ',
      maxCPU:'Processador Intel® ou AMD compatível com 64 bits; processador de 2 GHz ou mais rápido com SSE 4.2 ou posterior',
      maxRAM: '16 GB de RAM',
      maxVideoCard: 'GTX 1650 4GB',
      maxStorage: '6 GB de espaço disponível - SSD'
    },
    {
      name: 'Adobe Illustrator 2021',
      image: '../../assets/icon/ilustrator.png',
      requiredBits: ' Requerido um sistema operacional de 64 bits',
      minSO: 'Windows 10 (64 bits) versões V1809, V1903, V1909 e V2004',
      minCPU: 'AMD Athlon',
      minRAM: '8 GB de RAM',
      minVideoCard: 'NVIDIA 9800 GT 1 GB / AMD HD 4870 1 GB (DX 10, 10.1, 11)',
      minStorage: '2 GB de espaço disponível',
      maxSO:'Windows 10 (64 bits) versões V1809, V1903, V1909 e V2004',
      maxCPU:'Amd Ryzen',
      maxRAM: '16 GB de RAM',
      maxVideoCard: 'NVIDIA GTX 1650 4 GB / AMD RX 560 4 GB',
      maxStorage: '4 GB de espaço disponível - SSD'
    },
    {
      name: 'Adobe Premiere 2021',
      image: '../../assets/icon/AdobePremiere.png',
      requiredBits: ' Requerido um sistema operacional de 64 bits',
      minSO: 'Microsoft Windows 10 (64 bits) versão 1909 ou posterior',
      minCPU: 'CPU Intel® de 6ª geração ou mais recente – ou CPU AMD Ryzen™ 1000 Series ou mais recente',
      minRAM: '8 GB de RAM',
      minVideoCard: 'NVIDIA GeForce GTX 970 2GB',
      minStorage: '8 GB de espaço disponível',
      maxSO:'Microsoft Windows 10 (64 bits) versão 1909 ou posterior',
      maxCPU:'CPU Intel® de 7ª geração ou mais recente com Quick Sync – ou CPU AMD Ryzen™ 3000 Series/Threadripper 2000 Series ou mais recente',
      maxRAM: '16 GB de RAM - 32GB ou mais para 4K',
      maxVideoCard: 'NVIDIA GeForce GTX 1060 6GB',
      maxStorage: '10 GB de espaço disponível - SSD'
    },
    {
      name: 'Adobe After Effects 2021',
      image: '../../assets/icon/Adobe After.png',
      requiredBits: ' Requerido um sistema operacional de 64 bits',
      minSO: 'Microsoft Windows 10 (64 bits) versões 1909',
      minCPU: ' Processador Intel ou AMD Quad-Core',
      minRAM: '16 GB de RAM',
      minVideoCard: 'GTX 980 2GB',
      minStorage: '15 GB de espaço disponível',
      maxSO:'Microsoft Windows 10 (64 bits) versões 1909',
      maxCPU:'Processador Intel ou AMD Octa-Core (Recomenda-se 8 núcleos ou mais para Renderização de vários quadros)',
      maxRAM: '32 GB de RAM',
      maxVideoCard: 'NVIDIA GTX 1080 6 GB',
      maxStorage: '15 GB de espaço disponível - SSD'},
    {
      name: 'Adobe XD 2021',
      image: '../../assets/icon/AdobeXD.png',
      requiredBits: ' Requerido um sistema operacional de 64 bits',
      minSO: 'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
      minCPU: 'Intel Core 2 Quad CPU Q6600 @ 2.40 GHz (4 CPUs) / AMD Phenom 9850 Quad-Core (4 CPUs) @ 2.5 GHz',
      minRAM: '4 GB de RAM',
      minVideoCard: 'NVIDIA 9800 GT 1 GB / AMD HD 4870 1 GB (DX 10, 10.1, 11)',
      minStorage: '72 GB de espaço disponível',
      maxSO:'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
      maxCPU:'Intel Core i5 3470 @ 3.2 GHZ (4 CPUs) / AMD X8 FX-8350 @ 4 GHZ (8 CPUs)',
      maxRAM: '8 GB de RAM',
      maxVideoCard: 'NVIDIA GTX 660 2 GB / AMD HD7870 2 GB',
      maxStorage: '72 GB de espaço disponível'
    },
    {
      name: 'Adobe Indesign 2021',
      image: '../../assets/icon/AdobeIndesign.png',
      requiredBits: ' Requerido um sistema operacional de 64 bits',
      minSO: 'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
      minCPU: 'Intel Core 2 Quad CPU Q6600 @ 2.40 GHz (4 CPUs) / AMD Phenom 9850 Quad-Core (4 CPUs) @ 2.5 GHz',
      minRAM: '4 GB de RAM',
      minVideoCard: 'NVIDIA 9800 GT 1 GB / AMD HD 4870 1 GB (DX 10, 10.1, 11)',
      minStorage: '72 GB de espaço disponível',
      maxSO:'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
      maxCPU:'Intel Core i5 3470 @ 3.2 GHZ (4 CPUs) / AMD X8 FX-8350 @ 4 GHZ (8 CPUs)',
      maxRAM: '8 GB de RAM',
      maxVideoCard: 'NVIDIA GTX 660 2 GB / AMD HD7870 2 GB',
      maxStorage: '72 GB de espaço disponível'
    },
  ]

  secondLine = [
    {
      name: 'Adobe Dreamweaver 2021',
      image: '../../assets/icon/Dreamweaver Icon.png',
      requiredBits: ' Requerido um sistema operacional de 64 bits',
      minSO: 'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
      minCPU: 'Intel Core 2 Quad CPU Q6600 @ 2.40 GHz (4 CPUs) / AMD Phenom 9850 Quad-Core (4 CPUs) @ 2.5 GHz',
      minRAM: '4 GB de RAM',
      minVideoCard: 'NVIDIA 9800 GT 1 GB / AMD HD 4870 1 GB (DX 10, 10.1, 11)',
      minStorage: '72 GB de espaço disponível',
      maxSO:'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
      maxCPU:'Intel Core i5 3470 @ 3.2 GHZ (4 CPUs) / AMD X8 FX-8350 @ 4 GHZ (8 CPUs)',
      maxRAM: '8 GB de RAM',
      maxVideoCard: 'NVIDIA GTX 660 2 GB / AMD HD7870 2 GB',
      maxStorage: '72 GB de espaço disponível'
    },
    {
      name: 'Adobe Lightroom 2021',
      image: '../../assets/icon/AdobeLightroom.png',
      requiredBits: ' Requerido um sistema operacional de 64 bits',
      minSO: 'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
      minCPU: 'Intel Core 2 Quad CPU Q6600 @ 2.40 GHz (4 CPUs) / AMD Phenom 9850 Quad-Core (4 CPUs) @ 2.5 GHz',
      minRAM: '4 GB de RAM',
      minVideoCard: 'NVIDIA 9800 GT 1 GB / AMD HD 4870 1 GB (DX 10, 10.1, 11)',
      minStorage: '72 GB de espaço disponível',
      maxSO:'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
      maxCPU:'Intel Core i5 3470 @ 3.2 GHZ (4 CPUs) / AMD X8 FX-8350 @ 4 GHZ (8 CPUs)',
      maxRAM: '8 GB de RAM',
      maxVideoCard: 'NVIDIA GTX 660 2 GB / AMD HD7870 2 GB',
      maxStorage: '72 GB de espaço disponível'},
      {
        name: 'Auto Cad 2021',
        image: '../../assets/icon/AutoCad.jpg',
        requiredBits: ' Requerido um sistema operacional de 64 bits',
        minSO: 'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
        minCPU: 'Intel Core 2 Quad CPU Q6600 @ 2.40 GHz (4 CPUs) / AMD Phenom 9850 Quad-Core (4 CPUs) @ 2.5 GHz',
        minRAM: '4 GB de RAM',
        minVideoCard: 'NVIDIA 9800 GT 1 GB / AMD HD 4870 1 GB (DX 10, 10.1, 11)',
        minStorage: '72 GB de espaço disponível',
        maxSO:'Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1',
        maxCPU:'Intel Core i5 3470 @ 3.2 GHZ (4 CPUs) / AMD X8 FX-8350 @ 4 GHZ (8 CPUs)',
        maxRAM: '8 GB de RAM',
        maxVideoCard: 'NVIDIA GTX 660 2 GB / AMD HD7870 2 GB',
        maxStorage: '72 GB de espaço disponível'},
  ]
    

  ngOnInit() {
  }


  sendInformations(name, img, requiredBits, minSO,minCPU, minRAM, minVideoCard,minStorage, maxSO, maxCPU,maxRAM,maxVideoCard,maxStorage){
    let Item = {
      state: {
        name: name,
        img: img,
        requiredBits: requiredBits,
        minSO: minSO,
        minCPU: minCPU,
        minRAM: minRAM,
        minVideoCard: minVideoCard,
        minStorage: minStorage,
        maxSO: maxSO,
        maxCPU: maxCPU,
        maxRAM: maxRAM,
        maxVideoCard: maxVideoCard,
        maxStorage: maxStorage
      }
    }

    

    this.router.navigate(['informations'], Item);
  }
}
