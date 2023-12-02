import { Component,inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection,getDocs } from 'firebase/firestore';
import { Student } from '../student';
@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})


export class ListStudentsComponent {
    firestore: Firestore = inject(Firestore);
    allStudents:Student[] = [];
    async readAllStudents(){
     
      const students = collection(
        this.firestore,'students'
      )
      const querySnapshot = await getDocs(students);
       querySnapshot.forEach((doc)=>{
        this.allStudents.push(new Student(doc.data()["student_name"],doc.data()["date_of_birth"],doc.data()["aadhar_number"]));
         console.log(doc.data());
        });
       

    }

    constructor(){
      this.readAllStudents();
    }
    ngOnInit(){

    }
    
  }