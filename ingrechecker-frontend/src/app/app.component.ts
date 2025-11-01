import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { TestService } from './services/test.service';
import  { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './body/body.component';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule, BodyComponent],
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  message = 'Loading...';

  message2: string = 'Message from typeScript file';

  imageUrl: string = 'https://signatrue-signatures.s3.eu-west-2.amazonaws.com/website/robot+magnifier.png';

  titleName: string = '';
  postContent: string = '';
  imageLink: string = '';
  externalLink: string = '';
  addStyle: boolean = false;

  textValue: string = 'Value is coming from the component';

  bool: boolean = true;

  buttonClick() {
    console.log('Button clicked! Event binding works!');
  }

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.refreshMessage();
  }
  

  refreshMessage() {
    this.testService.getHello().subscribe({
      next: (res) => this.message = res,
      error: () => this.message = 'Error connecting to backend'
    });
  }

onKeyup() {
  console.log(this.textValue);
}
  

}


