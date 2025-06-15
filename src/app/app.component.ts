import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainUiHandlerService } from './services/main-ui-handler.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  constructor(private uiHandler: MainUiHandlerService) {}
  ngAfterViewInit(): void {
    this.uiHandler.init();
  }

  title = 'Anuradha S.';
}
