import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }
  Name=""
  RollNo=""
  CollegeName=""
  AddmissionNo=""
  ParentName=""
  DOB=""
  Address=""
  MobileNo=""
  ParentmobileNo=""
  EmailD=""
  BloodGroup=""

  readRegister=()=>{
    let data={
      "Name":this.Name,
      "RollNo":this.RollNo,
      "CollegeName":this.CollegeName,
      "AddmissionNo":this.AddmissionNo,
      "ParentName":this.ParentName,
      "DOB":this.DOB,
      "Address":this.Address,
      "MobileNo":this.MobileNo,
      "ParentmobileNo":this.ParentmobileNo,
      "EmailD":this.EmailD,
      "BloodGroup":this.BloodGroup
    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}
