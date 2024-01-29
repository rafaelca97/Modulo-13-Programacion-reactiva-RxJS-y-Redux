import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  tareas: Array<{ id: number; tarea: string; Asignacion: string; estado: 'Pendiente' | 'Realizado' }> = [];
  form: FormGroup = new FormGroup({});

  constructor(private tareaService: TareasService) { }

  ngOnInit(): void {
    this.tareas = this.tareaService.getTareas();
    this.form = new FormGroup({
      tarea: new FormControl(''),
      Asignacion: new FormControl('')
    })
  }

  addTarea() {
    this.tareaService.addTarea(this.form.value);
    this.form.reset();
    this.tareas = this.tareaService.getTareas();
  }

  marcarRealizado(id: number) {
    this.tareaService.marcarRealizado(id);
    this.tareas = this.tareaService.getTareas();
  }
}
