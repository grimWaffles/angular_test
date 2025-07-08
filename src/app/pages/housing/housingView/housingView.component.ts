import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingModelComponent } from "src/app/components/housing-model/housing-model.component";
import { HousingService } from 'src/app/services/housing.service';
import { HousingModel } from 'src/app/interfaces/housingModel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingModelComponent],
  templateUrl: './housingView.component.html',
  styleUrls: ['./housingView.component.css']
})
export class HomeComponent {
  //Injected
  housingService: HousingService = inject(HousingService)

  //Variables
  housingModelList: HousingModel[] = [];

  //Constructor
  constructor(){
    this.housingModelList = this.housingService.getAllHousingModels()
  }
}
