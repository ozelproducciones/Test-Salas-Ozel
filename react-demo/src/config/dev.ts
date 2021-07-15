import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'bvd1oiElRys1qoBG3oA5nFYH3EokrLUC58YX',
  sdkSecret: 'mAWmDelVSJHFWuyiaVZBOuuJsr8fezayiJF8',
  topic: 'Testing Zoom',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '',
  signature: '',
};
