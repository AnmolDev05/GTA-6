import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { SecondScreen } from './components/second-screen/second-screen';
import { HeroSection } from './components/hero-section/hero-section';

@Component({
  selector: 'app-root',
  imports: [SecondScreen,Navbar,HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('GTA-6');
}
