import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaminhaoValorPage } from './caminhao-valor.page';

describe('CaminhaoValorPage', () => {
  let component: CaminhaoValorPage;
  let fixture: ComponentFixture<CaminhaoValorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhaoValorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaminhaoValorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
