import { GoldenLayoutService } from '@embedded-enterprises/ng6-golden-layout';
import * as GoldenLayout from 'golden-layout';

/**
 * Extend the base GoldenLayoutService to expose the GoldenLayout object
 * To use this, provide it in the app.module like:
 * {
 *    provide: GoldenLayoutService,
 *    useClass: GoldenLayoutExtService
 * }
 */
export class GoldenLayoutExtService extends GoldenLayoutService {

  get goldenLayout(): GoldenLayout {
    return this['_layout'] as GoldenLayout;
  }
}
