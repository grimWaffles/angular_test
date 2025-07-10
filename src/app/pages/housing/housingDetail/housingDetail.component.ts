import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingModel } from 'src/app/interfaces/housingModel';
import { HousingService } from 'src/app/services/housing.service';

@Component({
    selector: 'app-housing-detail',
    imports: [CommonModule],
    templateUrl: './housingDetail.component.html',
    styleUrls: ['./housingDetail.component.css']
})
export class HousingDetailComponent {
  //Injected
  route: ActivatedRoute = inject(ActivatedRoute)
  housingService: HousingService = inject(HousingService)

  //Variables
  housingModelId = 0;
  housingDetail : HousingModel | undefined

  constructor(){
    this.housingModelId = Number(this.route.snapshot.paramMap.get('id'))
    this.housingDetail = this.housingService.getHousingModelById(this.housingModelId)
  }
}
