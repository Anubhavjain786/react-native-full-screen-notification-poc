let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}
function navigate(routeName: any, params: any) {
  _navigator.navigate(routeName, params);
}
// function goBack() {
//   _navigator.dispatch(NavigationActions.back());
// }
export default {
  navigate,
  setTopLevelNavigator,
};
