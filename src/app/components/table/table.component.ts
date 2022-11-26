import { Component, Host, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { isEqual } from 'lodash';
import { MaintenanceComponent } from 'src/app/pages/maintenance/maintenance.component';
var $ = require('jquery');

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dataSource: any;
  @Output() newRowEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() updateEvent = new EventEmitter<any>();

  newRow = {}

  constructor(@Host() private _maintanance: MaintenanceComponent) { }
  
  ngOnInit(): void {
    for (let key of this.getKeys()) {
      this.newRow[key] = '';
    }
  }

  getKeys() {
    if (this.dataSource.length > 0) {
      return Object.keys(this.dataSource[0]);
    }
    return [];
  }

  add() {
    let clone = Object.assign({},this.newRow);
    this.dataSource.push(clone);
    for (let key of this.getKeys()) {
      this.newRow[key] = '';
    }
    this.newRowEvent.emit(clone);
  }

  update(row: any) {
    this.updateEvent.emit(row);
  }

  remove(row: any) {
    for (let i = 0; i < this.dataSource.length; i++) {
      if (isEqual(this.dataSource[i], row)) {
        this.dataSource.splice(i, 1);
        this.deleteEvent.emit(row);
      }
    }
  }

}
