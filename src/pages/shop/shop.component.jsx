import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsPageContainer from '../collection/collection.container';

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
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    return (
      <div className='shope-page'>
        <Routes>
          <Route path='/' element={<CollectionsOverviewContainer />} />
          <Route path='/:collectionId' element={<CollectionsPageContainer />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
