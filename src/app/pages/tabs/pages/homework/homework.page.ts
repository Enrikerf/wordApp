import { ApiKerfService } from "src/app/shared/modules/api-kerf/services/api-kerf/api-kerf-service.service";

import { Component, OnInit } from "@angular/core";
import { Entry } from 'src/app/shared/modules/api-kerf/models/entry';

@Component({
  selector: "app-homework",
  templateUrl: "./homework.page.html",
  styleUrls: ["./homework.page.scss"],
})
export class HomeworkPage implements OnInit {
  public myEntries;
  constructor(private akService: ApiKerfService) {}

  ngOnInit() {
    this.akService.userService.getWords(1).subscribe((res) => {
      console.log(res);
      this.myEntries = res;
    });
  }

  processForm(form){

  }
}
