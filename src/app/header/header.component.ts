import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  icon = faBars;
  @Output() featuredApp = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(app: string) {
    this.featuredApp.emit(app);
  }

}
