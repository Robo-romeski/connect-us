import { observable } from 'mobx';
import { Actions } from 'react-native-router-flux';

class AppViewStore {
  @observable routeStack2=[
    {
      key: 'login',
    },
  ];
  routeStack=[
    {
      key: 'login',
    },
  ];
  @observable drawerOpened=false;
  @observable appLoading=false;
  replaceRoute(routeObj) {
    Actions.home();
  }

}

export default new AppViewStore();
