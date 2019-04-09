import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.less';


const ArticlesItem = ({ id, title, image }) => (
  <Link to={`/article/${id}`} className="articles__item">
    <img src={image.src} alt={image.alt} className="articles__image" />
    <h2 className="articles__title">{title}</h2>
  </Link>
);

ArticlesItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.shape(),
};

ArticlesItem.defaultProps = {
  id: '',
  title: '',
  image: {},
};

export default ArticlesItem;
