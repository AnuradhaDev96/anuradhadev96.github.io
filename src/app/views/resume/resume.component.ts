import { AfterViewInit, Component, HostListener } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements AfterViewInit {
    ngAfterViewInit(): void {
    this.initScrollTop();
  }

  @HostListener('window:scroll', [])
  initScrollTop() {
    const scrollTop = document.querySelector('.scroll-top');

    const toggle = () => {
      scrollTop && (window.scrollY > 100
        ? scrollTop.classList.add('active')
        : scrollTop.classList.remove('active'));
    };

    window.addEventListener('load', toggle);
    document.addEventListener('scroll', toggle);
  }
}
