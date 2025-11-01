import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

    postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

    objArray: { id: number; title: string; content: string }[] = [
      { id: 1, title: 'Post A', content: 'Content for Post A' },
      { id: 2, title: 'Post B', content: 'Content for Post B' },
      { id: 3, title: 'Post C', content: 'Content for Post C' },
      { id: 4, title: 'Post D', content: 'Content for Post D' },
      { id: 5, title: 'Post E', content: 'Content for Post E' }
    ];

  constructor() {

    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
}

addNew() {
  this.objArray.push({
    id: this.objArray.length + 1,
    title: `Post ${String.fromCharCode(65 + this.objArray.length)}`,
    content: `Content for Post ${String.fromCharCode(65 + this.objArray.length)}`
  });

}

deleteObj(index: number) {
  this.objArray.splice(index, 1);

}
}
