import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenTreesComponent } from './garden-trees.component';

describe('GardenTreesComponent', () => {
  let component: GardenTreesComponent;
  let fixture: ComponentFixture<GardenTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenTreesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
