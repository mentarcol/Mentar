import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { BaseService } from 'src/app/shared/services/base.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private baseService: BaseService,
    private messageService: MessageService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required]],
    });
  }

  saveUser() {
    this.baseService.postMethod('users', this.form.value).subscribe({
      next: () => {
        this.messageService.add({
          key: 'myKey1',
          severity: 'success',
          detail: 'Enviado exitosamente.',
        });
        this.form.reset();
        this.dialog.closeAll();
      },
      error: () => {
        this.messageService.add({
          key: 'myKey1',
          severity: 'error',
          detail: 'Algo salio mal, intentalo mas tarde.',
        });
      },
    });
  }
}
