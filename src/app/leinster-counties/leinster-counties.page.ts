import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-leinster-counties',
  templateUrl: './leinster-counties.page.html',
  styleUrls: ['./leinster-counties.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LeinsterCountiesPage implements OnInit {
  counties: string[] = ["Carlow", "Dublin", "Kildare",
"Kilkenny", "Laois", "Longford", "Louth", "Meath",
"Offaly", "Westmeath", "Wexford", "Wicklow"];


  constructor() { }

  ngOnInit() {
  }

}
