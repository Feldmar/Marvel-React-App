import { AxiosResponse } from 'axios'
import { ComicsModel } from 'src/models/comics-model';
import { CreatorsModel } from 'src/models/creators-model';
import { EventsModel } from 'src/models/events-model';
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
	static async getComics(params: {limit: number, offset: number, title?: string}): Promise<AxiosResponse<{data: MarvelList<ComicsModel[]>}>> {
		return $api.get('comics', {  params: {limit: params.limit, offset: params.offset, titleStartsWith: params.title ? params.title : undefined}})
	}
	static async getComic(id: string): Promise<AxiosResponse<{data: MarvelList<ComicsModel[]>}>> {
		return $api.get('comics/' + id)
	}
	static async getCreators(params: {limit: number, offset: number, fullName?: string}): Promise<AxiosResponse<{data: MarvelList<CreatorsModel[]>}>> {
		return $api.get('creators', {  params: {limit: params.limit, offset: params.offset, nameStartsWith: params.fullName ? params.fullName : undefined}})
	}
	static async getCreator(id: string): Promise<AxiosResponse<{data: MarvelList<CreatorsModel[]>}>> {
		return $api.get('creators/' + id)
	}
	static async getEvents(params: {limit: number, offset: number, title?: string}): Promise<AxiosResponse<{data: MarvelList<EventsModel[]>}>> {
		return $api.get('events', {  params: {limit: params.limit, offset: params.offset, nameStartsWith: params.title ? params.title : undefined}})
	}
	static async getEvent(id: string): Promise<AxiosResponse<{data: MarvelList<EventsModel[]>}>> {
		return $api.get('events/' + id)
	}
}