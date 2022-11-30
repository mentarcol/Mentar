import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPhaseComponent } from '../modal-phase/modal-phase.component';

@Component({
  selector: 'app-phase-section',
  templateUrl: './phase-section.component.html',
  styleUrls: ['./phase-section.component.scss']
})
export class ComponentSevenComponent {

  constructor(
    private dialog: MatDialog

  ) { }

  openModal(numberPhase: number) {
    const modal = this.dialog.open(ModalPhaseComponent);
    modal.componentInstance.numberPhase = numberPhase;
  }
}
