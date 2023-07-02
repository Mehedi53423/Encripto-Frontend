import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncriptoComponent } from './encripto.component';

describe('EncriptoComponent', () => {
  let component: EncriptoComponent;
  let fixture: ComponentFixture<EncriptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncriptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncriptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
