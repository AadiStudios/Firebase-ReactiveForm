import { Component , ViewChild,inject} from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc,collection } from 'firebase/firestore';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  @ViewChild ("createStudentform") studentForm : any;
  firestore:Firestore = inject(Firestore);
  myForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      date_of_birth: [null, Validators.required],
      aadhar_number: ['', Validators.required],
    });
  }
  saveData():void{
  const acollection = collection(this.firestore,'students');
  addDoc(acollection,{
    'student_name' : this.myForm.value.name,
    'date_of_birth': this.myForm.value.date_of_birth,
    'aadhar_number': this.myForm.value.aadhar_number
  });

  
  }
  resetForm():void{
    this.myForm.reset({
      'student_name':'',
      'date_of_birth':null,
      'aadhar_number': '',
    })
  }
  submitForm():void{
    console.log(this.myForm.value); 

  alert(this.myForm.value.name);
  this.saveData();
  this.resetForm();
  

  }


  
}
