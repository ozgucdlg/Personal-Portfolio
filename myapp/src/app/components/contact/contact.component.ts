import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserrService } from 'src/app/services/userr.service';
import { Userr } from 'src/model/userr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user:Userr={
    id:0,
    userName:'',
    lastName:'',
    phoneNumber:'',
    email:'',
    message:''

  }

  constructor(private userrService:UserrService, private router:Router, private toastr: ToastrService){

  }

  ngOnInit(): void {
   
    }

    createUser(){
     this.userrService.createUser(this.user).subscribe(()=>{
        this.router.navigate(['/contact']); 
      })
  }



  showSuccess() {
    this.toastr.success('İşlem başarıyla tamamlandı.', 'Başarılı');
  }

}

