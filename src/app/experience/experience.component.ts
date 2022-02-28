import { Component, OnInit } from '@angular/core';
import {Entry} from "../shared/entry-model";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  Experience: Entry[] = [
      new Entry("Work", "ThePineappleCo.", "Porto, Portugal","Intern", 2021, 2022, ["Machine Learning/Data Science Natural Language Processing;","JavaScript Programming;","Web design;"]),
      new Entry("Work", "IDSocial", "Porto, Portugal","Designer", 2015, 2018, ["Web Design;","Social Media Management and Content Creation;","Graphic Design;"])
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
