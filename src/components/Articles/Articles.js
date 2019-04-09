import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import { isEmpty } from '../../utils/isEmpty';
import { fetchArticlesData } from './redux/articles.redux';
import { changeInitialRender } from '../../redux/appState';

import ArticlesItem from './ArticlesItem/ArticlesItem';

import './style.less';


class Articles extends PureComponent {
  static propTypes = {
    fetchArticlesData: PropTypes.func,
    changeInitialRender: PropTypes.func,
    articlesData: PropTypes.shape(),
    appState: PropTypes.shape(),
  };

  static defaultProps = {
    fetchArticlesData: () => {},
    changeInitialRender: () => {},
    articlesData: {},
    appState: {},
  };

  componentDidMount() {
    const { appState } = this.props;
    if (appState.isInitialRender) {
      this.props.fetchArticlesData();
      this.props.changeInitialRender();
    }
  }

  render() {
    const { data, isFetching } = this.props.articlesData;

    if (isFetching) {
      return (
        <div className="articles">
          <div className="spinner">
            <Loader type="Oval" color="#00BFFF" height="50" width="50" />
          </div>
        </div>
      );
    }

    if (isEmpty(data)) {
      return null;
    }

    return (
      <div className="articles">
        {data.map(item => (
          <ArticlesItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articlesData: state.articles,
  appState: state.appState,
});

export default connect(
  mapStateToProps,
  { fetchArticlesData, changeInitialRender },
)(Articles);
