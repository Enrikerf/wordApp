

import { Component, OnInit } from "@angular/core";
import { ApiKerfService } from 'src/app/shared/modules/api-kerf/services/api-kerf/api-kerf-service.service';
@Component({
  selector: "app-tabsearch",
  templateUrl: "./tabsearch.page.html",
  styleUrls: ["./tabsearch.page.scss"],
})
export class TabsearchPage {
  public searchResult: string[];
  public chosenWord: string;
  public isWordChosed: boolean = false;

  constructor(private apiKerfService: ApiKerfService) {}

  processForm(form) {
    this.apiKerfService.entryService
      .searchEntries(form.value.wordToSearch)
      .subscribe((words: any) => {
        this.searchResult = words;
      });
  }

  clickWord(word) {
    this.isWordChosed = true;
    this.chosenWord = word;
  }

  removeChosenWord() {
    this.isWordChosed = false;
  }
}
