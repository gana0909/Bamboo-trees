import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyTreesComponent } from './lucky-trees.component';

describe('LuckyTreesComponent', () => {
  let component: LuckyTreesComponent;
  let fixture: ComponentFixture<LuckyTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyTreesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuckyTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
