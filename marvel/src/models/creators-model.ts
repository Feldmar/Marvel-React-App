export type CreatorsModel = {
    id:number | string,
    fullName  : string,
   
    thumbnail: {
        extension: string,
        path: string
    },

  series: {
    available: any,
    items: [{
        resourceURI: string,
        name: string
    }]
  },
  stories: {
      available: any,
      items: [{
          resourceURI: string,
          name: string,
          type: string
      }]
  },
  comics: {
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
        name: string
    }]
  },
}