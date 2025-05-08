export const isRouteValid = (routes: string[]) => {
  return (route: string) => !routes.includes(route)
}
