import {Component, HostListener, Inject, InjectionToken, Injector} from '@angular/core';

const location = new InjectionToken<string>('location');
const weather = new InjectionToken<string>('weather');
const hash = new InjectionToken<string>('hash');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: location, useValue: 'http:/www.bla3.com/abc#testingDummy'},
    {provide: weather, useValue: 'sunny nice weather'},
    {
      provide: hash,
      useFactory: (loc: string, weath: string) => {
        console.log(`printout ${loc.split('#')[1]} && ${weath}`);
        return 'this is dummy test !!!!!';
      },
      deps: [
        location,
        weather
      ]
    }
  ]
})

export class AppComponent {
  genders = ['male', 'female'];
  @HostListener('document:click') private onDocClick() {
    this.onTest();
  }

  constructor(@Inject(hash) private hashTest: any) {}

  onTest() {
    console.log('Test DI \'hashTest\' ..... ', this.hashTest);
  }
}
