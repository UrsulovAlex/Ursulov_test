import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCloudDownload, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { arrayIcon } from '../../../config/toolbar.config'

@Component({
  selector: 'app-pdf-editor',
  templateUrl: './pdf-editor.component.html',
  styleUrls: ['./pdf-editor.component.scss']
})
export class PdfEditorComponent implements OnInit {
  faCloudDownload = faCloudDownload;
  titlePage = '';
  toolbarIcon: IconDefinition[] = arrayIcon;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTitle();
  }

  getTitle(): void {
		this._route.data.subscribe(getTitle => {
            this.titlePage = getTitle['title']});
	}

}
