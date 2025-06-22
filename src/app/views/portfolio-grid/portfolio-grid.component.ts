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
      title: 'Ecommerce Mobile App Solution',
      description: 'Online shopping app makes it easy to explore, and pay for products, all in one place.',
      gallery: 'portfolio-gallery-web',
      detailsLink: '/portfolio-details'
    },
    {
      image: 'assets/img/portfolio/portfolio-10.webp',
      category: 'Graphics',
      filterClass: 'filter-uiux',
      title: 'UI Design for Discount Finder App',
      description: 'Set of organized screens with minimal workflows and features for discount/promotions listing app',
      gallery: 'portfolio-gallery-graphics',
      detailsLink: '/portfolio-details'
    },
    {
      image: 'assets/img/portfolio/portfolio-7.webp',
      category: 'Motion',
      filterClass: 'filter-webapps',
      title: 'Management Support System - LockHood',
      description: 'Web app for a Decision Support System to keep records of their production lines in the manufacturing yard.',
      gallery: 'portfolio-gallery-motion',
      detailsLink: '/portfolio-details'
    },
    {
      image: 'assets/img/portfolio/portfolio-4.webp',
      category: 'Branding',
      filterClass: 'filter-genai',
      title: 'Accessibility Mobile App with AI Features',
      description: 'Consists with offline quiz challenge, voice/gesture based calculator, gamified story, and supportive voice bot that provides answers using AI model.',
      gallery: 'portfolio-gallery-brand',
      detailsLink: '/portfolio-details'
    },
    {
      image: 'assets/img/portfolio/portfolio-2.webp',
      category: 'Web Design',
      filterClass: 'filter-mobileapps',
      title: 'Ticket Booking Mobile App',
      description: 'Complete solution for ticket booking system for ticket buyers and event organizers.',
      gallery: 'portfolio-gallery-web',
      detailsLink: '/portfolio-details'
    },
    {
      image: 'assets/img/portfolio/portfolio-11.webp',
      category: 'Graphics',
      filterClass: 'filter-uiux',
      title: 'UI Design for Chat Application',
      description: 'Followed the Cupertino guidelines to design a chat application to send voice and video messages',
      gallery: 'portfolio-gallery-graphics',
      detailsLink: '/portfolio-details'
    }
  ];
}
