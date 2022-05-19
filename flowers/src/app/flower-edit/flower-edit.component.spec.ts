import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerEditComponent } from './flower-edit.component';

describe('FlowerEditComponent', () => {
  let component: FlowerEditComponent;
  let fixture: ComponentFixture<FlowerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
