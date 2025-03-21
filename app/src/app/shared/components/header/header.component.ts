import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faBars = faBars;
  faSearch = faSearch;
  faUser = faUser;

  @Output() _sidebarToggle = new EventEmitter<boolean>(false);
  private $sidebarToggle: boolean = false;

  constructor(){

  }

  sidebarToggle(){    
    this.$sidebarToggle = !this.$sidebarToggle;
    this._sidebarToggle.emit(this.$sidebarToggle)
  }

}
