import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotosAnosPage } from './motos-anos.page';

describe('MotosAnosPage', () => {
  let component: MotosAnosPage;
  let fixture: ComponentFixture<MotosAnosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotosAnosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotosAnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
