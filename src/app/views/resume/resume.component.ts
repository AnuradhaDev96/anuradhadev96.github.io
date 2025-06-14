import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}
