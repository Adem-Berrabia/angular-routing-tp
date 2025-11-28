import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };
  submitted = false;
  onSubmit() {
    console.log('Formulaire soumis:', this.contactForm);
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.contactForm = { name: '', email: '', message: '' };
    }, 3000);
  }
}
