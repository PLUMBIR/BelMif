import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { BodyComponent } from "./body/body.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MdbCheckboxModule,
    BodyComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BelMifFront';
}
