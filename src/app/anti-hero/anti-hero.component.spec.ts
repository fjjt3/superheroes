import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiHeroComponent } from './anti-hero.component';

describe('AntiHeroComponent', () => {
  let component: AntiHeroComponent;
  let fixture: ComponentFixture<AntiHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
