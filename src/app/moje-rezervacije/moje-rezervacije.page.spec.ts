import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MojeRezervacijePage } from './moje-rezervacije.page';

describe('MojeRezervacijePage', () => {
  let component: MojeRezervacijePage;
  let fixture: ComponentFixture<MojeRezervacijePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojeRezervacijePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MojeRezervacijePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
