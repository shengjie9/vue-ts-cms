import type { RouteRecordRaw } from 'vue-router'

const getLocalRoutesFileConfig = () => {
  const localRoutes: RouteRecordRaw[] = []
  const routes: Record<string, any> = import.meta.glob('../router/main/**/*.ts', {
    eager: true
  })

  Object.keys(routes).forEach((item) => {
    localRoutes.push(routes[item].default)
  })

  return localRoutes
}

export let firstRoute: any = null

export const mapMenuToRoutes = (menus: any[]) => {
  const userMenus: RouteRecordRaw[] = []
  const localRoutes = getLocalRoutesFileConfig()

  menus.forEach((meun) => {
    meun.children.forEach((item: any) => {
      const route = localRoutes.find((route) => route.path === item.url)
      if (route) {
        if (!userMenus.find((item) => item.path === meun.url)) {
          userMenus.push({ path: meun.url, redirect: route })
        }
        userMenus.push(route)
      }
      if (!firstRoute && route) firstRoute = route
    })
  })
  return userMenus
}

export const mapPathToMenu = (path: string, menus: any[]) => {
  let findRoute
  menus.forEach((meun) => {
    meun.children.forEach((item: any) => {
      if (path === item.url) findRoute = item
    })
  })

  return findRoute
}

interface IbreadCrumb {
  name: string
  url: string
}

export const mapPathToBreadCrumb = (path: string, menus: any[]) => {
  const breadCrumb: IbreadCrumb[] = []
  menus.forEach((meun) => {
    meun.children.forEach((item: any) => {
      if (item.url === path) {
        //1.一级目录
        breadCrumb.push({ name: meun.name, url: meun.url })
        //2.二级目录
        breadCrumb.push({ name: item.name, url: item.url })
      }
    })
  })
  return breadCrumb
}
