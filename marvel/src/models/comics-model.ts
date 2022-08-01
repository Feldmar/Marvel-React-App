export type ComicsModel = {
  id:number | string,
  title: string,
  description: string,
	thumbnail: {
    extension: string,
    path: string
  },
	creators: {
		available: any,
		items: [{
			resourceURI: string,
			name: string,
			role: string
		}]
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
	characters: {
		available: any,
		items: [{
			resourceURI: string,
			name: string
		}]
	},
	events: {
		available: any,
		items: [{
			resourceURI: string,
			name: string,
			type: string
		}]
	},
}