import { unique } from '@rxweb/reactive-form-validators';

export class Hobby {
  @unique()
  name: string;
}
