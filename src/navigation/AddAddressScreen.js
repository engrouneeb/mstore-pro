import React, {PureComponent} from 'react';

import {AddAddress} from '@containers';

class AddAddressScreen extends PureComponent {
  render() {
    const {navigation} = this.props;

    return <AddAddress onBack={() => navigation.goBack()} />;
  }
}

export default AddAddressScreen;
