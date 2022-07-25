export type CharacterModel = {
    [x: string]: any
  	id: number | string,
  	image: string,
  	name: string,
  	description: string,
  	modified: string
  	resourceURI: string
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
