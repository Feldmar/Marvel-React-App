export type ComicsModel = {
  	id:number | string,
  	title: string,
  	description: string,
	thumbnail: {
    	extension: string,
    	path: string
  	},
	diamondCode: string,
	format: string,
	textObjects: any,
	collections: any,
	creators: {
		available: any,
		items: {
			name: string,
			role: string
		}
	},
	series: {
		resourceURI: string,
		name: string
	},
	stories: {
		available: any,
		items: [{
			resourceURI: string,
			name: string,
			type: string
		}]
	},
	prices: {
		price: number,
	} 
}