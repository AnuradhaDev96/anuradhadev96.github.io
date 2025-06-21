import { Component } from '@angular/core';
import { PortfolioItem } from '../../models/portfolio-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-grid.component.html',
  styleUrl: './portfolio-grid.component.css'
})
export class PortfolioGridComponent {
  portfolioItemList: PortfolioItem[] = [
    {
      image: 'assets/img/portfolio/portfolio-1.webp',
      category: 'Mobile Applications',
      filterClass: 'filter-mobileapps',
      title: 'Modern Dashboard Interface',
      description: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.',
      gallery: 'portfolio-gallery-web',
      detailsLink: '/portfolio-details'
    },
    {
      image: 'assets/img/portfolio/portfolio-10.webp',
      category: 'Graphics',
      filterClass: 'filter-uiux',
      title: 'Creative Brand Identity',
      description: 'Vestibulum id ligula porta felis euismod semper at vulputate.',
      gallery: 'portfolio-gallery-graphics',
      detailsLink: '/portfolio-details'
    },
    {
      image: 'assets/img/portfolio/portfolio-7.webp',
      category: 'Motion',
      filterClass: 'filter-webapps',
      title: 'Product Animation Reel',
      description: 'Donec ullamcorper nulla non metus auctor fringilla dapibus.',
      gallery: 'portfolio-gallery-motion',
      detailsLink: '/portfolio-details'
    },
    {
      image: 'assets/img/portfolio/portfolio-4.webp',
      category: 'Branding',
      filterClass: 'filter-genai',
      title: 'Luxury Brand Package',
      description: 'Aenean lacinia bibendum nulla sed consectetur elit.',
      gallery: 'portfolio-gallery-brand',
      detailsLink: '/portfolio-details'
    },
    {
      image: 'assets/img/portfolio/portfolio-2.webp',
      category: 'Web Design',
      filterClass: 'filter-mobileapps',
      title: 'E-commerce Platform',
      description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
      gallery: 'portfolio-gallery-web',
      detailsLink: '/portfolio-details'
    },
    {
      image: 'assets/img/portfolio/portfolio-11.webp',
      category: 'Graphics',
      filterClass: 'filter-uiux',
      title: 'Digital Art Collection',
      description: 'Cras mattis consectetur purus sit amet fermentum.',
      gallery: 'portfolio-gallery-graphics',
      detailsLink: '/portfolio-details'
    }
  ];
}
