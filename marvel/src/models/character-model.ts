export type CharacterModel = {
  	id: number | string,
  	image: string,
  	name: string,
  	description: string,
  	thumbnail: {
    	extension: string,
    	path: string
  	},
	comics: {
		available: any,
		returned: any,
		collectionURI: string,
		items: [{
			resourceURI: string,
			name: string
		}]
	},
	stories: {
		available: any,
		returned: any,
		collectionURI: string,
		items: [{
			resourceURI: string,
			name: string,
			type: string
		}]
	},
	events:{
		available: any,
		returned: any,
		collectionURI: string,
		items: [{
			resourceURI: string,
			name: string
		}]
	},
	series: {
		available: any,
		returned: any,
		collectionURI: string,
		items: [{
			resourceURI: string,
			name: string
		}]
	}
}
