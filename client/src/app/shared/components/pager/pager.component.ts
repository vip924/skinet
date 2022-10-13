import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  @Input() totalCount: number; // *** Input property is something we receive from parent component. ***
  @Input() pageSize: number;
  @Output() pageChanged = new EventEmitter<number>(); // *** Output property is something we emit from child to parent component. ***
  constructor() { }

  ngOnInit(): void {
  }

  onPagerChanged(event: any) {
    this.pageChanged.emit(event.page);
  }

}
