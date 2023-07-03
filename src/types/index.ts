export interface IExperience {
  id: string,
  label: string,
  url: string,
  work: string,
  description: string,
  dates: string,
  languages: ILanguage[]
}

export interface ILanguage {
  label: string
}

export interface IProject {
  id: string,
  label: string,
  url: string,
  state: string,
  description: string,
  languages: ILanguage[]
}

export interface ISkill {
  id: string,
  label: string,
  icon: string
}