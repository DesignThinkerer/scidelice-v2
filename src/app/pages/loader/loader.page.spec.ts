import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { LoaderPage } from "./loader.page";
import { IonicModule } from "@ionic/angular/ionic-module";
import "jasmine";

describe('LoaderPage', () => {
    let component: LoaderPage;
    let fixture: ComponentFixture<LoaderPage>;
    let fail = false;
    
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LoaderPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(LoaderPage);
        component = fixture.componentInstance;
    }));

    it('should go to the login page after load', () => {
        expect(fail).toBeTruthy();
    });
});