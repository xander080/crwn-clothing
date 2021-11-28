import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');
    //observable pattern if using firebase using snapshot this do live update
    // collectionRef.onSnapshot((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    // if not using firebase we use promise based pattern
    // 1st way - negative is:  the only time the new data is when we remount our shop, unlike snapshot it is liveupdate
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    // 2nd way its not good if using firebase it will be nested
    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-b3187/databases/(default)/documents/collections').then(response => JSON.parse(response)).then(collections=>{console.log(collections);});
    // since where putting the get Collection to our reducer new code will be done here
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { isCollectionFetching, isCollectionLoaded } = this.props;
    return (
      <div className='shope-page'>
        <Routes>
          <Route
            path='/'
            element={
              <CollectionsOverviewWithSpinner
                isLoading={isCollectionFetching}
              />
            }
          />
          <Route
            path='/:collectionId'
            element={
              <CollectionPageWithSpinner isLoading={!isCollectionLoaded} />
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
