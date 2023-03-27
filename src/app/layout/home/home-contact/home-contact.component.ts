import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})
export class HomeContactComponent implements OnInit {
  transporter: any;
  mailOptions:any
  url:any;


  constructor(private builder:FormBuilder) { }
  FormData: FormGroup;
  ngOnInit() {
    this.FormData = this.builder.group({
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Name: new FormControl('', [Validators.required])
      })
    
  }

  onSubmit(data){

  }


  // SendEmail(input: any) {
  //   return this.http.post(this.url, input, response).pipe(
  //     map(
  //       (response) => {
  //           if (response) {
  //       return response
  //           }
  //       },
  //       (error) => {
  //           if (error) {
  //       return error
  //           }
  //        }
  //     )
  //       )
  //     }




 

  

  //create and smpt mail 
}
