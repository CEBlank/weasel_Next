import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resources';


defineBackend({
  data,
});