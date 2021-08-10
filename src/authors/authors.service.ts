import { authorsData } from './authors.data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {
  public findOneById(id: number) {
    return authorsData.find((author) => author.id === id);
  }
}
