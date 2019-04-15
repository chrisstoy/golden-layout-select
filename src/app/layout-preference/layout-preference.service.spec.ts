import { TestBed } from '@angular/core/testing';
import { LayoutPreferenceService } from './layout-preference.service';

describe('LayoutPreferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutPreferenceService = TestBed.get(LayoutPreferenceService);
    expect(service).toBeTruthy();
  });
});
