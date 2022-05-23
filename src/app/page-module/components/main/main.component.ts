import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    titlePage = '';

	constructor(private _route: ActivatedRoute) { }

	ngOnInit(): void {
		this.getTitle();
	}

	getTitle(): void {
		this._route.data.subscribe(getTitle => {
            this.titlePage = getTitle['title']});
	}
}
