import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutPreferenceSelectorComponent } from './layout-preference-selector.component';

describe('LayoutPreferenceSelectorComponent', () => {
  let component: LayoutPreferenceSelectorComponent;
  let fixture: ComponentFixture<LayoutPreferenceSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutPreferenceSelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPreferenceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
