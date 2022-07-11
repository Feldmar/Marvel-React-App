import { AxiosResponse } from 'axios'
import $api from '../http/axios';
import {CharacterModel} from '../models/character-model';
import { MarvelList } from '../models/common';



export default class MarvelApi {
  static async getCharacters(): Promise<AxiosResponse<{data: MarvelList<CharacterModel[]>}>> {
    return $api.get('characters', { params: {limit: 10, offset: 0} })
  }
  static async getCharacter(id: string): Promise<AxiosResponse<{data: MarvelList<CharacterModel[]>}>> {
    return $api.get('characters/' + id)
  }
}