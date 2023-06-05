import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, IonicModule],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have menu labels', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(10);
    expect(menuItems[0].textContent).toContain('Home');
    expect(menuItems[1].textContent).toContain('Profile');
    expect(menuItems[2].textContent).toContain('How');
    expect(menuItems[3].textContent).toContain('Why');
    expect(menuItems[4].textContent).toContain('Pantry');
    expect(menuItems[5].textContent).toContain('Planner');
    expect(menuItems[6].textContent).toContain('Recipes');
    expect(menuItems[7].textContent).toContain('Settings');
    expect(menuItems[8].textContent).toContain('Success');
    expect(menuItems[9].textContent).toContain('Tools');
  });

  it('should have urls', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(10);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/folder/home');
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/folder/profile');
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual('/folder/how');
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual('/folder/why');
    expect(menuItems[4].getAttribute('ng-reflect-router-link')).toEqual('/folder/pantry');
    expect(menuItems[5].getAttribute('ng-reflect-router-link')).toEqual('/folder/planner');
    expect(menuItems[6].getAttribute('ng-reflect-router-link')).toEqual('/folder/recipes');
    expect(menuItems[7].getAttribute('ng-reflect-router-link')).toEqual('/folder/settings');
    expect(menuItems[8].getAttribute('ng-reflect-router-link')).toEqual('/folder/success');
    expect(menuItems[9].getAttribute('ng-reflect-router-link')).toEqual('/folder/tools');
  });
});
