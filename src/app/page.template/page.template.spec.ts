import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PageTemplate } from './page.template';

describe('FolderPage', () => {
  let component: PageTemplate;
  let fixture: ComponentFixture<PageTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTemplate, IonicModule],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PageTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
