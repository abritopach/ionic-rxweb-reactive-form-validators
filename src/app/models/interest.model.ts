import { unique } from '@rxweb/reactive-form-validators';

export class Interest {
  @unique()
  name: string;
}
