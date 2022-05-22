import { Component, OnInit } from '@angular/core';
import { footerMenu , IMenu} from '../../../config/menu.config';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  menuData: IMenu[] = footerMenu;
  faDashboard = faDashboard;

  constructor() { }

  ngOnInit(): void {
  }

}
