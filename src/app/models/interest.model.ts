import { unique, required } from '@rxweb/reactive-form-validators';

export class Interest {
  @unique()
  name: string;

  @required()
  selected: boolean;
}
