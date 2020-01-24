import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import { pageContents, listData } from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Card extends React.Component {

static propTypes = {
    title: PropTypes.node,
    
}

    render() {
        return (
            <section className={styles.components}>
                <h3>{this.props.title}</h3>
            </section>
        )
    }
}

export default Card;
