import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotosModelosPage } from './motos-modelos.page';

describe('MotosModelosPage', () => {
  let component: MotosModelosPage;
  let fixture: ComponentFixture<MotosModelosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosModelosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotosModelosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
