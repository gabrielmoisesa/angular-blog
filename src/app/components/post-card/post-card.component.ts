import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() imgSrc: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png';
  @Input() date: string = 'Post Date';
  @Input() title: string = 'Post Title';

  formatTitleForURL(title: string): string {
  title = title.replace(/[^a-zA-Z0-9\s-]/g, ''); // Removes anything that's not a letter, number, space, or hyphen
  title = title.replace(/,/g, ''); // Remove commas
  title = title.toLowerCase(); // Convert the title to lowercase
  return title.replace(/\s+/g, '-'); // Replace spaces with hyphens
  }

  get postUrl(): string {
    return this.formatTitleForURL(this.title);
  }
}
