import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-pgination',
  templateUrl: './page-pgination.component.html',
  styleUrls: ['./page-pgination.component.scss']
})
export class PagePginationComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  titlePage = '';

  constructor() { }

}
