export interface IUserType {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}

export interface IUserStoreType {
  userList: IUserType[]
  userTotalCount: number
}
