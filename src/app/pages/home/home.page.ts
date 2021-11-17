import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  firstLine: any[] = [
    {
      name: 'Grand Theft Auto V',
      image: '../../assets/icon/GTA.png',
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
      name: 'Counter Strike Global Offensive',
      image: '../../assets/icon/Counter-Strike-Global-Offensive.jpg',
      requiredBits: ' Requerido um sistema operacional de 64 bits',
      minSO: 'Windows 7, Vista ou XP',
      minCPU: 'Intel Core 2 Duo E6600 ou AMD Phenom X3 8750',
      minRAM: '2 GB',
      minVideoCard: 'Shader 3.0 ou melhor, DirectX 9 compatível com 256 MB + memória (VRAM)',
      minStorage: '15 GB',
      maxSO:'Windows 7, 8 ou 10',
      maxCPU:'Intel Pentium Dual-Core E5700 3 GHz ou AMD Phenom 8750 Triple-Core',
      maxRAM: '4 GB',
      maxVideoCard: 'Shader 3.0 ou melhor, DirectX 9 compatível com 512 MB + memória (VRAM)',
      maxStorage: '15 GB'
    },
    {
      name: 'The Witcher',
      image: '../../assets/icon/TheWirtcher.webp',
      requiredBits: ' Requerido um sistema operacional de 64 bits',
      minSO: '64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 10',
      minCPU: 'Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940',
      minRAM: '6 GB de RAM',
      minVideoCard: 'Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870',
      minStorage: '35 GB de espaço disponível',
      maxSO:'64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 10',
      maxCPU:'Intel CPU Core i7 3770 3.4 GHz / AMD CPU AMD FX-8350 4 GHz',
      maxRAM: '8 GB de RAM',
      maxVideoCard: 'Nvidia GPU GeForce GTX 770 / AMD GPU Radeon R9 290',
      maxStorage: '35 GB de espaço disponível'
    },
    {
      name: 'League of Legends',
      image: '../../assets/icon/LEAGUE.jpg',
      requiredBits: ' Requerido um sistema operacional de 32 ou 64 bits',
      minSO: 'Win 7, 8, 10',
      minCPU: 'Intel Core i3-530 ou AMD A6-3650',
      minRAM: '2GB RAM',
      minVideoCard: 'NVidia GeForce 9600GT ou AMD HD 6570',
      minStorage: '16GB de espaço disponível',
      maxSO:'Win 10',
      maxCPU:'Intel Core i5-3300 ou AMD Ryzen 3 1200',
      maxRAM: '4GB RAM ',
      maxVideoCard: 'NVidia GeForce 560 ou AMD Radeon HD 6950',
      maxStorage: '16GB de espaço disponível'
    },
    {
      name: 'Valorant',
      image: '../../assets/icon/Valorant.jpg',
      requiredBits: ' Requerido um sistema operacional de 64 bits',
      minSO: 'Windows 7, 8 ou 10',
      minCPU: 'Intel Core 2 Duo E8400',
      minRAM: '4 GB RAM',
      minVideoCard: 'Intel HD 3000',
      minStorage: '10 GB de espaço disponível',
      maxSO:'Windows 7, 8 ou 10',
      maxCPU:'Intel Core i3-4150',
      maxRAM: '4 GB RAM',
      maxVideoCard: 'GeForce GT 730',
      maxStorage: '10 GB de espaço disponível'
    }
  ]

  secondLine: any[] = [
   {
     name: 'Player Unknown BattleGrounds',
     image: "../../assets/icon/PlayerUnknown’s.jpg",
     requiredBits: ' Requerido um sistema operacional de 64 bits',
     minSO: '64-bit Windows 7, Windows 8.1, Windows 10',
     minCPU: 'Intel Core i5-4430 / AMD FX-6300',
     minRAM: '8 GB RAM',
     minVideoCard: 'NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB',
     minStorage: '40 GB de espaço disponível',
     maxSO:'64-bit Windows 7, Windows 8.1, Windows 10',
     maxCPU:'Intel Core i5-6600K / AMD Ryzen 5 1600',
     maxRAM: '16 GB de RAM',
     maxVideoCard: 'NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB',
     maxStorage: '50 GB de espaço disponível'
   },
   {
    name: 'Minecraft',
    image: "../../assets/icon/minecraft.png",
    requiredBits: ' Requerido um sistema operacional de 64 bits',
    minSO: 'Windows 10 versão 14393.0	',
    minCPU: 'Intel Core i3-3210 de 3,2 GHz, AMD A8-7600 de 3,1 GHz ou equivalente',
    minRAM: '4 GB	RAM',
    minVideoCard: 'Intel HD Graphics 4000 ou AMD Radeon R5',
    minStorage: '1 GB de espaço disponível',
    maxSO:'Windows anterior ao 10, macOS ou Linux',
    maxCPU:'Intel Core i5-4690 de 3,5 GHz, AMD A10-7800 de 3,5 GHz ou superior',
    maxRAM: '8 GB RAM ou mais',
    maxVideoCard: 'GeForce série 700 ou AMD Radeon Rx série 200 (exceto chipsets integrados) com OpenGL 4.5',
    maxStorage: '4 GB (SSD recomendado)'
  },
  {
    name: 'Rainbow Six',
    image: "../../assets/icon/Rainbow Six.jpg",
    requiredBits: 'Requerido um sistema operacional de 64 bits',
    minSO: 'Windows 7, Windows 8.1, Windows 10 (64bit versions required)',
    minCPU: 'Intel Core i3 560 @ 3.3 GHz or AMD Phenom II X4 945 @ 3.0 GHz',
    minRAM: '6 GB de RAM',
    minVideoCard: 'NVIDIA GeForce GTX 460 or AMD Radeon HD 5870 (DirectX-11 compliant with 1GB of VRAM)',
    minStorage: '61 GB de espaço disponível',
    maxSO:'Windows 7 SP1, Windows 8.1, Windows 10 (64bit versions required)',
    maxCPU:'Intel Core i5-2500K @ 3.3 GHz or better or AMD FX-8120 @ 3.1 Ghz or better',
    maxRAM: '8 GB de RAM',
    maxVideoCard: 'NVIDIA GeForce GTX 670 (or GTX 760 / GTX 960) or AMD Radeon HD 7970 (or R9 280x [2GB VRAM] / R9 380 / Fury X)',
    maxStorage: '61 GB de espaço disponível'
  },
  {
    name: 'Red Dead Redemption',
    image: "../../assets/icon/Red.jpg",
    requiredBits: ' Requerido um sistema operacional de 64 bits',
    minSO: 'Windows 7 - Service Pack 1 (6.1.7601)',
    minCPU: 'Intel Core i5-2500K ou AMD FX-6300 Memória',
    minRAM: '8 GB RAM',
    minVideoCard: 'Nvidia GeForce GTX 770 2GB ou AMD Radeon R9 280 3GB',
    minStorage: '150 GB de espaço disponível',
    maxSO:'Windows 10 - April 2018 Update (v1803)',
    maxCPU:'Intel® Core™ i7-4770K / AMD Ryzen 5 1500X',
    maxRAM: '12 GB RAM ',
    maxVideoCard: 'Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480',
    maxStorage: '150 GB de espaço disponível'
  },
  {
    name:' CyberPunk',
    image: "../../assets/icon/cyperpunk.jpeg",
    requiredBits: ' Requerido um sistema operacional de 64 bits',
    minSO: 'Windows 7 or 10',
    minCPU: 'Intel Core i5-3570K or AMD FX-8310',
    minRAM: '8 GB RAM',
    minVideoCard: 'NVIDIA GeForce GTX 780 or AMD Radeon RX 470',
    minStorage: '70 GB de espaço disponível',
    maxSO:'Windows 10',
    maxCPU:' Intel Core i7-4790 or AMD Ryzen 3 3200G',
    maxRAM: '12 GB RAM ',
    maxVideoCard: 'GTX 1060 6GB / GTX 1660 Super or Radeon RX 590',
    maxStorage: '70 GB de espaço disponível'
  }
  ]

  constructor(private router: Router) {}

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
