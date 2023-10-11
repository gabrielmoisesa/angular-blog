import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from 'src/app/data';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  postTitle: string = '';

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postTitle = params['title'];
    });
  }

  formatTitleForURL(title: string): string {
    title = title.replace(/[^a-zA-Z0-9\s-]/g, ''); 
    title = title.replace(/,/g, ''); 
    title = title.toLowerCase(); 
    return title.replace(/\s+/g, '-'); 
  }

  getPostDataByTitle(title: string) {
    return data.find(post => this.formatTitleForURL(post.title) === title);
  }

}
