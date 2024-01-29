import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  tareasNumber: number = 1;

  constructor(private tareaService: TareasService) { }

  ngOnInit(): void {
    this.tareaService.getTareasNumber().subscribe({
      next: data => this.tareasNumber = data.tareasNumber
    });
  }

  getTareasPendientesCount(): number {
    return this.tareaService.getTareasPendientes().length;
  }

}
