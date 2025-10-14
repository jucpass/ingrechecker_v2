import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { TestService } from './services/test.service';
import  { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  message = 'Loading...';

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
}


