import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { TextStyleVariantMap } from '../../foundation/Text/styles';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const buttonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background: transparent;
`;
const buttonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

export const ButtonBase = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  opacity: 1;
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ ghost }) => (ghost ? buttonGhost : buttonDefault)}
  &:hover,
  &:focus {
    opacity: .8
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}

  ${propToStyle('margin')}
  ${propToStyle('display')}

  ${breakpointsMedia({
    xs: css`
      ${(TextStyleVariantMap.smallestException)}
    `,
    md: css`
      ${(TextStyleVariantMap.paragraph1)}
    `,
  })}
`;
