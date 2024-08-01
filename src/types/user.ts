export interface IUserQuery extends IUserQueryFormData {
  offset: number
  size: number
}

export interface IUserQueryFormData {
  name?: string
  realname?: string
  cellphone?: string
  enable?: number
  createAt?: any
}
