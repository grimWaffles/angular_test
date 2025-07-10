import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingModel } from 'src/app/interfaces/housingModel';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-housing-model',
    imports: [CommonModule, RouterLink],
    templateUrl: './housing-model.component.html',
    styleUrls: ['./housing-model.component.css']
})
export class HousingModelComponent {
  @Input() housingModel !: HousingModel
}
