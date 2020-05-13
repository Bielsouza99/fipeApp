import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrosAnosPage } from './carros-anos.page';

describe('CarrosAnosPage', () => {
  let component: CarrosAnosPage;
  let fixture: ComponentFixture<CarrosAnosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosAnosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosAnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
