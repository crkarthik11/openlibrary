import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../entities/admin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homes: Admin[] = [];
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      fullName: ['',[Validators.required, ]],  
      email: [''],
      message: ['']
    });
   }

  ngOnInit(): void {
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],  
      email: [''],
      message: ['']
    });
  }

  onSubmit() {  
      const admin = new Admin(this.contactForm.value)
      console.log(this.contactForm.value.fullName)
      this.homes.push(admin)
      console.log('Your form data : ', this.contactForm.value );
      this.contactForm.reset()
  }

}
