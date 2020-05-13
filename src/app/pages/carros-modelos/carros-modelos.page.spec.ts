import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrosModelosPage } from './carros-modelos.page';

describe('CarrosModelosPage', () => {
  let component: CarrosModelosPage;
  let fixture: ComponentFixture<CarrosModelosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosModelosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosModelosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
