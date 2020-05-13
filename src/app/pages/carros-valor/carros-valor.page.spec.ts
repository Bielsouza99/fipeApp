import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrosValorPage } from './carros-valor.page';

describe('CarrosValorPage', () => {
  let component: CarrosValorPage;
  let fixture: ComponentFixture<CarrosValorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosValorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosValorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
