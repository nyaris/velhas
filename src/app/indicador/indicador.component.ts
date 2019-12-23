import { Component, OnInit, Input } from '@angular/core';
import { TabuleiroComponent } from '../tabuleiro/tabuleiro.component';
import { TabuleiroService } from '../services/tabuleiro.service';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.css']
})
export class IndicadorComponent implements OnInit {
  
  constructor(private TabuleiroService: TabuleiroService) {}
  
  ngOnInit(): void {}
  
}

