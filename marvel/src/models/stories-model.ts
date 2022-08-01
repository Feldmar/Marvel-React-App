export type StoriesModel = {
  id: number | string,
  title: string,
  description: string,
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
  series: {
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
  originalIssue:{
    resourceURI: string,
    name: string,
  },
}