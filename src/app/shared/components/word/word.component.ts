import { Entry } from "../../modules/api-kerf/models/entry";
import { Meaning } from "../../modules/api-kerf/models/meaning";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EntryService } from '../../modules/api-kerf/services/entry/entry-service.service';

@Component({
  selector: "app-word",
  templateUrl: "./word.component.html",
  styleUrls: ["./word.component.scss"],
})
export class WordComponent implements OnInit {
  @Input() word: any;
  @Output() dismiss = new EventEmitter();
  public entry: Entry;
  public openedIndex: number[];
  constructor(private wordService: EntryService) {}
  ngOnInit() {
    this.openedIndex = [];
    this.wordService.getEntry(this.word).subscribe((entry: Entry) => {
      this.entry = entry;
    });
  }

  dismissModal() {
    this.dismiss.emit();
  }
  toggleItem(id) {
    if (this.isOpen(id)) {
      let index =this.openedIndex.findIndex((element)=>element === id);
      this.openedIndex.splice(index, index + 1);
    } else {
      this.openedIndex.push(id);
    }
  }
  isOpen(id) {
    return this.openedIndex.includes(id);
  }
}
