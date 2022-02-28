import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  Programming = ["JavaScript","Angular","C#","C++","HTML","CSS"];
  Admin = ["Systems Administrator (Windows Server & Debian OS)","Administration of Active Directory","Web Mail (Windows OS & DebianOS)","DHCP (Windows OS, Cisco & DebianOS)"];
  DataBases = ["SQL(MSSQL)","NoSQL(MongoDB)"];
  Networking = ["Configuration of VLANs","DHCP","Routing"];

  constructor() { }

  ngOnInit(): void {
  }

}
