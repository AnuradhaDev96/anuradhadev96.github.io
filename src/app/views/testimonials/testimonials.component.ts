import { Component } from '@angular/core';
import { TestimonialItem } from '../../models/testimonial-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials: TestimonialItem[] = [
    {
      image: 'assets/img/person/person-m-7.webp',
      title: 'Customer of Rho-Commerce Solution',
      introduction: 'Purchased their Rho-Commerce product and was impressed with the quality and support. Anuradha provided the full technical support with documentation to publish Fab Ceylon Online store from design stage to deployment the mobile app in stores and web apps in application servers.',
      content: 'Anuradha\'s expertise in mobile app development and flexibility in customization made the process smooth and efficient. He included more features on our request which aligns our marketing strategy. It still helps to serve our end customers to explore our range of products while enjoying discounts, loyalty and loyalty programs. Highly recommended!',
      name: 'S. Rajapaksa',
      profession: 'Owner, Fab Ceylon',
    },
    {
      image: 'assets/img/person/person-f-8.webp',
      title: 'Client of Ticket Booking Solution',
      introduction: 'We wanted a complete digitalized process for our event ticket selling mobile app concept. Our requirements were complex, but Anuradha was able to deliver a solution that met our needs perfectly.',
      content: ' Working with Anuradha was a great experience. He understood our requirements and provided a solution after a nice design process. The app is user-friendly and I would highly recommend him to anyone looking for a mobile app developer.',
      name: 'Not Mentioned',
      profession: 'Owner, Event Management Agency in, Japan',
    },
    {
      image: 'assets/img/person/person-m-9.webp',
      title: 'JestCalc - Accessibility App with AI Features',
      introduction: 'I wanted to create an app that would help people with disability in vision to use their phones for knowledge development purpose. With the intention of researching, I presented software proposal to Anuradha to develop this mobile app.',
      content: 'Anuradha was capable of finding cost effective solutions to integrate Generative AI features to support quizes and answering bots. We launched the project on time. Received feedback from users which encourages us to further expand the current solution. I highly recommend Anuradha for his expertise in mobile app development and his ability to deliver high-quality solutions.',
      name: 'Hasith',
      profession: 'Owner, JestCalc',
    },
    {
      image: 'assets/img/person/person-f-10.webp',
      title: 'Product Owner for Credible App',
      introduction: 'I shortlisted Anuradha\'s service proposal to extend our existing Credible - fitness tracking mobile app. He integrated Firebase Crashlytics, Survey features and solved iOS specific issues in our app.',
      content: 'Working with Anuradha was easy and efficient. His profeciency in deploying and development of mobile apps is impressive. I would highly recommend him to anyone looking for mobile and web app development.',
      name: 'Harsha',
      profession: 'Product Owner',
    },
  ];
}
