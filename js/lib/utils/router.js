const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE";

export const init = (onRouterChange) => {
  history.pushState(null, null, "/");
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouterChange();
  });
};

export const routeChange = (url, value) => {
  history.pushState({ data: value }, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT));
};
