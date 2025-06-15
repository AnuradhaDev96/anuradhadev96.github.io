import { AfterViewInit, Component, HostListener } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
    ngAfterViewInit(): void {
    this.onScroll();
    this.initScrollTop();
  }
  @HostListener('window:scroll', [])
  onScroll() {
    const navLinks = document.querySelectorAll('.navmenu a');

    const onScroll = () => {
      const pos = window.scrollY + 200;

      navLinks.forEach(linkEl => {
        const link = linkEl as HTMLAnchorElement;
        if (!link.hash) return;
        const section = document.querySelector(link.hash) as HTMLElement | null;
        if (!section) return;

        if (pos >= section.offsetTop && pos <= section.offsetTop + section.offsetHeight) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('load', onScroll);
    document.addEventListener('scroll', onScroll);
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
