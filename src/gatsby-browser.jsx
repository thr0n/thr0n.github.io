export const onRouteUpdate = ({ location }) => {
    if (typeof window.goatcounter?.count === "function") {
        window.goatcounter.count({
            path: location.pathname + location.search
        })
    }
}