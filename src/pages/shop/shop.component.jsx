import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    //observable pattern if using firebase using snapshot this do live update
    // collectionRef.onSnapshot((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    // if not using firebase we use promise based pattern
    // 1st way - negative is:  the only time the new data is when we remount our shop, unlike snapshot it is liveupdate
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });

    // 2nd way its not good if using firebase it will be nested
    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-b3187/databases/(default)/documents/collections').then(response => JSON.parse(response)).then(collections=>{console.log(collections);});
  }

  render() {
    const { loading } = this.state;
    return (
      <div className='shope-page'>
        <Routes>
          <Route
            path='/'
            element={<CollectionsOverviewWithSpinner isLoading={loading} />}
          />
          <Route
            path='/:collectionId'
            element={<CollectionPageWithSpinner isLoading={loading} />}
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
