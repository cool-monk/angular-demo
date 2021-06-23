import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
})
export class AllPostsComponent implements OnInit {
  public allPosts: any;

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http
      .api('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.allPosts = data;
      });
  }
}
