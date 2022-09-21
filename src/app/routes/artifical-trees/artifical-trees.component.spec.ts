import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtificalTreesComponent } from './artifical-trees.component';

describe('ArtificalTreesComponent', () => {
  let component: ArtificalTreesComponent;
  let fixture: ComponentFixture<ArtificalTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtificalTreesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtificalTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
