import { Component, OnInit } from '@angular/core';
import { headerMenu , IMenu} from '../../../config/menu.config';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {  NavigationStart, Event, Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	menuData: IMenu[] = headerMenu;
	faUser = faUser;
	showMobMenu = false;

	constructor(private _router: Router) {
	}

    ngOnInit(): void {
        this.detectChangeRoute();
    }

    detectChangeRoute(): void {
        this._router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                this.showMobMenu = false;
            }
        })
    }

	showHideMobMenu(): void {
		this.showMobMenu = !this.showMobMenu;
	};

	hideMobMenu(event: boolean): void {
		this.showMobMenu = event;
	}
}
