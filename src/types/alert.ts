export interface Alert {
  id: string;
  start: number;
  end: number;
  timestamp: number;
  modifiedTime: number;
  stopIds?: string[] | null;
  routeIds?: string[] | null;
  url: UrlOrHeaderOrDescription;
  header: UrlOrHeaderOrDescription;
  description: UrlOrHeaderOrDescription;
  routes?: RoutesEntity[] | null;
}

export interface UrlOrHeaderOrDescription {
  translations: Translations;
  someTranslation: string;
}

export interface Translations {
  en: string;
  hu: string;
}

export interface RoutesEntity {
  routeId: string;
  stopIds?: string[] | null;
}
