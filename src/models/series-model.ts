export type SeriesModel = {
  id:number | string,
  title  : string,
  description : string,
  startYear:any,
  endYear:any,
  rating: any,
  type: string,
  thumbnail: {
    extension: string,
    path: string
  },
  events: {
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