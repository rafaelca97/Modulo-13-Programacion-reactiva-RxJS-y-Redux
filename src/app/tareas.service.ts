import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas: Array<{ id: number; tarea: string; Asignacion: string; estado: 'Pendiente' | 'Realizado' }> = [];
  private countTareaSubject = new Subject();

  constructor() { }

  addTarea(data: { tarea: string; Asignacion: string }): void {
    const nuevaTarea = {
      id: this.tareas.length + 1,
      tarea: data.tarea,
      Asignacion: data.Asignacion,
      estado: 'Pendiente' as 'Pendiente' | 'Realizado' // Inicializamos el estado como 'pendiente'
    };
    this.tareas.push(nuevaTarea);
    this.countTareaSubject.next({ tareasNumber: this.tareas.length });
  }

  getTareas(): Array<{ id: number; tarea: string; Asignacion: string; estado: 'Pendiente' | 'Realizado' }> {
    return this.tareas;
  }

  getTareasPendientes(): Array<{ id: number; tarea: string; Asignacion: string; estado: 'Pendiente' | 'Realizado' }> {
    return this.tareas.filter(tarea => tarea.estado === 'Pendiente');
  }

  getTareasNumber(): Observable<any> {
    return this.countTareaSubject.asObservable();
  }

  marcarRealizado(id: number): void {
    const tareaIndex = this.tareas.findIndex(t => t.id === id);
    if (tareaIndex !== -1) {
      this.tareas[tareaIndex].estado = 'Realizado' as 'Pendiente' | 'Realizado';
    }
  }
}
