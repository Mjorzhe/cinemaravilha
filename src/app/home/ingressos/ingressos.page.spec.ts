import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngressosPage } from './ingressos.page';

describe('IngressosPage', () => {
  let component: IngressosPage;
  let fixture: ComponentFixture<IngressosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngressosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
