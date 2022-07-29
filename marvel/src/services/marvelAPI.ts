import { AxiosResponse } from 'axios'
import { ComicsModel } from 'src/models/comics-model';
import { CreatorsModel } from 'src/models/creators-model';
import { EventsModel } from 'src/models/events-model';
import { SeriesModel } from 'src/models/series-model';
import { StoriesModel } from 'src/models/stories-model';
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
	static async getCreators(params: {limit: number, offset: number, firstName?: string}): Promise<AxiosResponse<{data: MarvelList<CreatorsModel[]>}>> {
		return $api.get('creators', {  params: {limit: params.limit, offset: params.offset, nameStartsWith: params.firstName ? params.firstName : undefined}})
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
	static async getSeries(params: {limit: number, offset: number, title?: string}): Promise<AxiosResponse<{data: MarvelList<SeriesModel[]>}>> {
		return $api.get('series', {  params: {limit: params.limit, offset: params.offset, titleStartsWith: params.title ? params.title : undefined}})
	}
	static async getPart(id: string): Promise<AxiosResponse<{data: MarvelList<SeriesModel[]>}>> {
		return $api.get('series/' + id)
	}
	static async getStories(params: {limit: number, offset: number}): Promise<AxiosResponse<{data: MarvelList<StoriesModel[]>}>> {
		return $api.get('stories', {  params: {limit: params.limit, offset: params.offset}})
	}
	static async getStory(id: string): Promise<AxiosResponse<{data: MarvelList<StoriesModel[]>}>> {
		return $api.get('stories/' + id)
	}
}