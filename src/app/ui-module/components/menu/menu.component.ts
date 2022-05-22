import { Component, Input, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { IMenu } from 'src/app/config/menu.config';
import { faCaretDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
	selectMenu = false;
	getScreenWidth = 0;
	faCaretDown = faCaretDown;
	faChevronDown = faChevronDown;

	@Input() data: IMenu[]  = [];
	@Input() menuHeader = false;
	@Output() hideMobMenu: EventEmitter<boolean> = new EventEmitter();

	constructor( ) { 
	}

	ngOnInit(): void {
		this.onWindowResize();
	}

	@HostListener('window:resize', ['$event'])
	onWindowResize() {
    	this.getScreenWidth = window.innerWidth;
  	}

	
	hideMobHeaderMenu(): void {
		this.hideMobMenu.emit(false);
	}
}
