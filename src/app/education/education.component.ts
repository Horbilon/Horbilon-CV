import { Component, OnInit } from '@angular/core';
import {Entry} from "../shared/entry-model";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  Education: Entry[] = [
    new Entry("Bachelor's", "ESAD", "Matosinhos, Portugal","Design - Communication", 2021, 2022, ["UI/UX;","Digital Product Design;","Web Development;","Branding;","Editorial Design"]),
    new Entry("CET", "ATEC", "Matosinhos, Portugal","Network Management & Information Technology", 2020, 2022, ["Programming (C++, C#, JavaScript, HTML/CSS);","Systems Administration (Windows & Linux OS);","Networking (Cisco Technology);", "Internship"])
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
