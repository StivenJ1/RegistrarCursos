import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProfesorComponent } from './profile-profesor.component';

describe('ProfileProfesorComponent', () => {
  let component: ProfileProfesorComponent;
  let fixture: ComponentFixture<ProfileProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
