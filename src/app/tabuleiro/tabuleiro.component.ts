import { Component } from '@angular/core';
import { TabuleiroService } from '../services/tabuleiro.service';
@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.css']
})
export class TabuleiroComponent {
  images: Array<{ url: string, check: string }>;
  constructor(private tabuleiroService: TabuleiroService) {
  }
  jogar(evento) {
    this.images = this.tabuleiroService.jogar(evento);
  }
}
    
    
  
  

