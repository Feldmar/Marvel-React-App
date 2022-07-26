export type EventsModel = {
    id:number | string,
    title  : string,
    description : string,
    start:any,
    end:any,
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
  characters: {
    available: any,
    items: [{
        resourceURI: string,
        name: string,
        role: string,
    }]
  },
  creators: {
    available: any,
    items: [{
        resourceURI: string,
        name: string,
        role: string,
    }]
},
    next:{
        resourceURI: string,
        name: string,
    },
    previous:{
        resourceURI: string,
        name: string,
    },
}