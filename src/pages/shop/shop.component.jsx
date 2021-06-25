import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />{' '}
    </div>
  );
};

export default ShopPage;
