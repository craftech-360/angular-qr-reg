import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = 'Register Process';
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      phone: ['', [Validators.required]]
    });
  }

  get formControls() {
    return this.myForm.controls;
  }

  onSubmit() {
    if (this.myForm.invalid) {
      return;
    }
    // Form is valid, perform desired action here
    console.log(this.myForm.value);
  }
}
