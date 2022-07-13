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
	textObjects:Array<string>,
	collections:Array<string>,
	creators: {
		items: {
			name: string
		}
	},
	series: {
		name: string
	}
}