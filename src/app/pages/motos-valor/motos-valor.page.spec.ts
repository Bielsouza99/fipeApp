import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotosValorPage } from './motos-valor.page';

describe('MotosValorPage', () => {
  let component: MotosValorPage;
  let fixture: ComponentFixture<MotosValorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosValorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotosValorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
