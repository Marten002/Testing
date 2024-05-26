export const handleResolvePathname = (pathname) => {
    let resolvePathname = pathname.split('/')

    return `/${resolvePathname[1]}`
}
