import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../env/env';

@Injectable({
  providedIn: 'root'
})
export class EmailRequestService {
  constructor() {}

  public sendMinimalEmailRequest(name: string, email: string, message: string): Promise<Boolean> {
    return emailjs.send(environment.emailServiceId, environment.emailTemplateId, {
      name: name,
      email: email,
      message: message
    }, environment.emailPublicKey)
    .then((response) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
  }
}
