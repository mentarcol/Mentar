import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseService } from 'src/app/shared/services/base.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private baseService: BaseService
  ) { }

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
      next: (res) => {
        console.log(res);
      },
      error: () => {
        console.log('Hubo un error al momento de ennviar su asesoria, vuelva intentarlo.');
      }
    })
  }

}
