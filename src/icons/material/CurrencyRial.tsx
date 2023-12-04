import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CurrencyRialIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 17H13V19H11V17ZM14 17H16V19H14V17ZM9 4H11V15C11 16.0609 10.5786 17.0783 9.82843 17.8284C9.07828 18.5786 8.06087 19 7 19H5C4.20435 19 3.44129 18.6839 2.87868 18.1213C2.31607 17.5587 2 16.7956 2 16V12H4V16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17H7C8.11 17 9 16.11 9 15V4ZM12 4H14V13H17V8H19V13C19 14.11 18.11 15 17 15H14C12.89 15 12 14.11 12 13V4ZM20 10H22V17C22 17.7956 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20H17V18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17V10Z" />
    </Svg>
  );
};
