import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-query-results',
  templateUrl: './query-results.component.html',
  styleUrls: ['./query-results.component.css']
})
export class QueryResultsComponent implements OnInit {

  @Input() data: any;
  @Input() species: any;
  JSON: JSON;
  constructor() {
    this.JSON = JSON;
  }
  ngOnInit(): void {
  }

}
