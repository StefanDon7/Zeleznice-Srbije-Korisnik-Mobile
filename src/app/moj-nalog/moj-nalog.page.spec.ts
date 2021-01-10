import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MojNalogPage } from './moj-nalog.page';

describe('MojNalogPage', () => {
  let component: MojNalogPage;
  let fixture: ComponentFixture<MojNalogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojNalogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MojNalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
