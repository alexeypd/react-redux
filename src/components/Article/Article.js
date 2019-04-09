import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchArticlesData } from '../Articles/redux/articles.redux';
import { changeInitialRender } from '../../redux/appState';
import { isEmpty } from '../../utils/isEmpty';

import './style.less';


class Article extends PureComponent {
  static propTypes = {
    fetchArticlesData: PropTypes.func,
    changeInitialRender: PropTypes.func,
    match: PropTypes.shape(),
    articlesData: PropTypes.shape(),
  };
  static defaultProps = {
    fetchArticlesData: () => {},
    changeInitialRender: () => {},
    match: {},
    articlesData: {},
  };

  state = {
    isOpenComments: false,
  };

  handleClickFetchData = () => {
    this.props.fetchArticlesData();
    this.props.changeInitialRender();
  };

  handleClickSwitchCommentState = () => {
    const { isOpenComments } = this.state;
    this.setState({ isOpenComments: !isOpenComments });
  };

  itemToRender = () => {
    const { match, articlesData } = this.props;
    const itemId = match.params.id;
    const { data } = articlesData;

    if (isEmpty(data)) {
      return (
        <div className="article__btn">
          <button className="btn" onClick={this.handleClickFetchData}>
            Загрузить данные
          </button>
        </div>
      );
    }

    const itemData = data.filter(item => item.id === itemId)[0];
    const { image, title, text, comments } = itemData;
    const { isOpenComments } = this.state;

    return (
      <div className="article__block">
        <div className="article__content">
          <img src={image.src} alt={image.alt} className="article__image" />
          <h2 className="article__title">{title}</h2>
          <p className="article__text">{text}</p>
        </div>
        <div className="article__btn">
          <button className="btn" onClick={this.handleClickSwitchCommentState}>
            {isOpenComments ? 'Скрыть комментарии' : 'Открыть комментарии'}
          </button>
        </div>
        {isOpenComments ? (
          <div className="article__comments-block">
            {comments.map(item => (
              <div key={item.id} className="article__comment">
                {item.text}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  render() {
    return (
      <div className="article">
        <div className="top-menu">
          <Link to="/" className="top-menu__back">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>chevron-thin-left</title>
              <path d="M13.891 17.418c0.268 0.272 0.268 0.709 0 0.979s-0.701 0.271-0.969 0l-7.83-7.908c-0.268-0.27-0.268-0.707 0-0.979l7.83-7.908c0.268-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.979l-7.141 7.419 7.141 7.418z" />
            </svg>
            <div>Назад</div>
          </Link>
        </div>
        {this.itemToRender()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articlesData: state.articles,
});

export default connect(
  mapStateToProps,
  { fetchArticlesData, changeInitialRender },
)(Article);
