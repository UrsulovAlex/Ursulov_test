import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { footerMenu , IMenu} from '../../../config/menu.config';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  menuData: IMenu[] = footerMenu;
  faDashboard = faDashboard;
}
