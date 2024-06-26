import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsTableComponent } from './elements-table.component';

describe('ElementsTableComponent', () => {
  let component: ElementsTableComponent;
  let fixture: ComponentFixture<ElementsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
