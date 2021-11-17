import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage implements OnInit {

  constructor(private router: Router, private actived: ActivatedRoute) { }

  items = [{
    img: '',
    nome: '',
    requiredBits: '',
    minSO: '',
    minCPU: '',
    minRAM: '',
    minVideoCard: '',
    minStorage: '',
    maxSO: '',
    maxCPU: '',
    maxRAM: '',
    maxVideoCard: '',
    maxStorage: ''
  }]

  informations: [{}]

  ngOnInit() {
    this.actived.queryParams.subscribe( () => {
      this.items[0].nome = this.router.getCurrentNavigation().extras.state.name
      this.items[0].img = this.router.getCurrentNavigation().extras.state.img
      this.items[0].requiredBits = this.router.getCurrentNavigation().extras.state.requiredBits
      this.items[0].minSO = this.router.getCurrentNavigation().extras.state.minSO
      this.items[0].minCPU = this.router.getCurrentNavigation().extras.state.minCPU
      this.items[0].minRAM = this.router.getCurrentNavigation().extras.state.minRAM
      this.items[0].minVideoCard = this.router.getCurrentNavigation().extras.state.minVideoCard
      this.items[0].minStorage = this.router.getCurrentNavigation().extras.state.minStorage
      this.items[0].maxSO = this.router.getCurrentNavigation().extras.state.maxSO
      this.items[0].maxCPU = this.router.getCurrentNavigation().extras.state.maxCPU
      this.items[0].maxRAM = this.router.getCurrentNavigation().extras.state.maxRAM
      this.items[0].maxVideoCard = this.router.getCurrentNavigation().extras.state.maxVideoCard
      this.items[0].maxStorage = this.router.getCurrentNavigation().extras.state.maxStorage
    })

  }



}
