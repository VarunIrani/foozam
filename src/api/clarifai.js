/* eslint-disable eol-last */
import {
  App,
} from 'clarifai';

import KEYS from './keys';

const app = new App({
  apiKey: KEYS.CLARIFAI,
});

export default app;