import { AxiosResponse } from 'axios'
import { ComicsModel } from 'src/models/comics-model';
import $api from '../http/axios';
import {CharacterModel} from '../models/character-model';
import { MarvelList } from '../models/common';

export default class MarvelApi {
	static async getCharacters(params: {limit: number, offset: number, name?: string}): Promise<AxiosResponse<{data: MarvelList<CharacterModel[]>}>> {
	
		return $api.get('characters', { params: {limit: params.limit, offset: params.offset, nameStartsWith: params.name ? params.name : undefined} })
	}
	static async getCharacter(id: string): Promise<AxiosResponse<{data: MarvelList<CharacterModel[]>}>> {
		return $api.get('characters/' + id)
	}
	static async getComics(): Promise<AxiosResponse<{data: MarvelList<ComicsModel[]>}>> {
		return $api.get('comics', { params: {limit: 100, offset: 0} })
	}
	static async getComic(id: string): Promise<AxiosResponse<{data: MarvelList<ComicsModel[]>}>> {
		return $api.get('comics/' + id)
	}
}