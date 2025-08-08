import { Component } from '@angular/core';
import { BtnPrimaryComponent } from "../../../../shared/components/btn-primary/btn-primary.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

    handleClick(){}

}
