import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { Link } from '../Link';

import { Text } from '../../foundation/Text';
import { Logo } from '../../../theme/Logo';

import { MenuWrapper } from './styles';

export function Menu({ onRegisterClick }) {
  const links = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Perguntas Frequentes',
      url: '/faq',
    },
    {
      text: 'Sobre',
      url: '/about',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>

        <Link
          href="/"
          color="secondary.main"
        >
          <Logo />
        </Link>
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>

        <Button variant="primary.main" onClick={onRegisterClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onRegisterClick: PropTypes.func.isRequired,
};
