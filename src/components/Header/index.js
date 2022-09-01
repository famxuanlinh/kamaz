import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Button } from 'reactstrap';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <Button color="danger">Danger!</Button>
        </header>
    );
};

export default Header;
