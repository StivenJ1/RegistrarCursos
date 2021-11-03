import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-email-component',
  templateUrl: './email-component.component.html',
  styleUrls: ['./email-component.component.css']
})
export class EmailComponentComponent implements OnInit {
  public email: any;
  public password: any;
  constructor(
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(formData: { valid: any; value: { email: string; password: string; }; }){
    if(formData.valid){
      console.log(formData.value);
      this.authService.login(formData.value.email,formData.value.password);
    }
  }

}
