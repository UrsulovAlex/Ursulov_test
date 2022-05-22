import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faSave, IconDefinition } from '@fortawesome/free-solid-svg-icons';



@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
	faSave = faSave;
	@Input() iconArray: IconDefinition[] = [];
	@Input() iconSave = false;
}
