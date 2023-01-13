import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }


    enterSearchValue: string = '';

    @Output()
    searchTextChange: EventEmitter<string> = new EventEmitter<string>();

    onSearcheTextChange() {
        this.searchTextChange.emit(this.enterSearchValue);
    }
}
