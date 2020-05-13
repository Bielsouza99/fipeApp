import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaminhaoAnosPage } from './caminhao-anos.page';

describe('CaminhaoAnosPage', () => {
  let component: CaminhaoAnosPage;
  let fixture: ComponentFixture<CaminhaoAnosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhaoAnosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaminhaoAnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
