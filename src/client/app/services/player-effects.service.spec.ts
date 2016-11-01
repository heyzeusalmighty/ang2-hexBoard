/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlayerEffectsService } from './player-effects.service';

describe('Service: PlayerEffects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerEffectsService]
    });
  });

  it('should ...', inject([PlayerEffectsService], (service: PlayerEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
