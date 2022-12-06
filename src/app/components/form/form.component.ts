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
  showLoader = false;

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
      phone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }

  saveUser() {
    this.showLoader = true;
    this.baseService.postMethod('users', this.form.value).subscribe({
      next: () => {
        this.showLoader = false;
        this.form.reset();
        this.dialog.closeAll();
        this.messageService.add({
          severity: 'success',
          detail: 'Enviado exitosamente.',
          life: 4000
        });
      },
      error: () => {
        this.showLoader = false;
        this.messageService.add({
          key: 'myKey1',
          severity: 'error',
          detail: 'Algo salio mal, intentalo mas tarde.',
        });
      },
    });
  }
}
