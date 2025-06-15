import { HostListener, Injectable } from '@angular/core';

declare const AOS: any;
declare const Waypoint: any;
declare const GLightbox: any;
declare const Isotope: any;
declare const imagesLoaded: any;
declare const Swiper: any;

@Injectable({
  providedIn: 'root'
})
export class MainUiHandlerService {

  constructor() {}

  init() {
    this.toggleScrolled();
    this.mobileNavToggleInit();
    this.setupHashLinkCloseMobileNav();
    // this.setupDropdowns();
    // this.initScrollTop();
    this.initAOS();
    this.initSkillsAnimation();
    this.initGlightbox();
    this.initIsotope();
    // this.initSwiper();
    this.initFaqToggle();
    this.scrollToHashOnLoad();
  }

  private toggleScrolled() {
    const selectBody = document.querySelector('body')!;
    const selectHeader = document.querySelector('#header');
    if (!selectHeader?.classList.contains('scroll-up-sticky') &&
        !selectHeader?.classList.contains('sticky-top') &&
        !selectHeader?.classList.contains('fixed-top')) return;

    const toggle = () => {
      window.scrollY > 100
        ? selectBody.classList.add('scrolled')
        : selectBody.classList.remove('scrolled');
    };

    document.addEventListener('scroll', toggle);
    window.addEventListener('load', toggle);
  }

  private mobileNavToggleInit() {
    const btn = document.querySelector('.mobile-nav-toggle');
    const toggle = () => {
      document.body.classList.toggle('mobile-nav-active');
      btn?.classList.toggle('bi-list');
      btn?.classList.toggle('bi-x');
    };

    btn?.addEventListener('click', toggle);
  }

  private setupHashLinkCloseMobileNav() {
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          document.body.classList.remove('mobile-nav-active');
        }
      });
    });
  }

  // private setupDropdowns() {
  //   document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
  //     navmenu.addEventListener('click', function (e) {
  //       e.preventDefault();
  //       const parent = this.parentElement!;
  //       parent.classList.toggle('active');
  //       const next = parent.nextElementSibling;
  //       next?.classList.toggle('dropdown-active');
  //       e.stopImmediatePropagation();
  //     });
  //   });
  // }

  private initAOS() {
    window.addEventListener('load', () => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
    });
  }

  private initSkillsAnimation() {
    const skills = document.querySelectorAll('.skills-animation');
    skills.forEach(item => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function () {
          const bars = item.querySelectorAll('.progress .progress-bar');
          bars.forEach(el => {
            el.setAttribute('style', `width: ${el.getAttribute('aria-valuenow')}%`);
          });
        }
      });
    });
  }

  private initGlightbox() {
    if (typeof GLightbox !== 'undefined') {
      GLightbox({ selector: '.glightbox' });
    }
  }

  private initIsotope() {
    document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
      const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
        const iso = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(filterEl => {
          filterEl.addEventListener('click', () => {
            isotopeItem.querySelector('.isotope-filters .filter-active')
              ?.classList.remove('filter-active');
            filterEl.classList.add('filter-active');
            iso.arrange({ filter: filterEl.getAttribute('data-filter') });
            this.initAOS();
          });
        });
      });
    });
  }

  private initFaqToggle() {
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach(item => {
      item.addEventListener('click', () => {
        item.parentElement?.classList.toggle('faq-active');
      });
    });
  }

  private scrollToHashOnLoad() {
    window.addEventListener('load', () => {
      if (window.location.hash) {
        const section = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: (section as HTMLElement).offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    });
  }
}
