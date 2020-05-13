import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaminhaoModelosPage } from './caminhao-modelos.page';

describe('CaminhaoModelosPage', () => {
  let component: CaminhaoModelosPage;
  let fixture: ComponentFixture<CaminhaoModelosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhaoModelosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaminhaoModelosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
