import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GasStationOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.77 7.23L19.78 7.22L16.06 3.5L15 4.56L17.11 6.67C16.17 7.03 15.5 7.93 15.5 9C15.5 9.3283 15.5647 9.65339 15.6903 9.95671C15.8159 10.26 16.0001 10.5356 16.2322 10.7678C16.7011 11.2366 17.337 11.5 18 11.5C18.36 11.5 18.69 11.42 19 11.29V18.5C19 18.7652 18.8946 19.0196 18.7071 19.2071C18.5196 19.3946 18.2652 19.5 18 19.5C17.7348 19.5 17.4804 19.3946 17.2929 19.2071C17.1054 19.0196 17 18.7652 17 18.5V14C17 13.4696 16.7893 12.9609 16.4142 12.5858C16.0391 12.2107 15.5304 12 15 12H14V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3H6C5.46957 3 4.96086 3.21071 4.58579 3.58579C4.21071 3.96086 4 4.46957 4 5V21H14V13.5H15.5V18.5C15.5 19.163 15.7634 19.7989 16.2322 20.2678C16.7011 20.7366 17.337 21 18 21C18.3283 21 18.6534 20.9353 18.9567 20.8097C19.26 20.6841 19.5356 20.4999 19.7678 20.2678C19.9999 20.0356 20.1841 19.76 20.3097 19.4567C20.4353 19.1534 20.5 18.8283 20.5 18.5V9C20.5 8.31 20.22 7.68 19.77 7.23ZM12 13.5V19H6V12H12V13.5ZM12 10H6V5H12V10ZM18 10C17.7348 10 17.4804 9.89464 17.2929 9.70711C17.1054 9.51957 17 9.26522 17 9C17 8.73478 17.1054 8.48043 17.2929 8.29289C17.4804 8.10536 17.7348 8 18 8C18.2652 8 18.5196 8.10536 18.7071 8.29289C18.8946 8.48043 19 8.73478 19 9C19 9.26522 18.8946 9.51957 18.7071 9.70711C18.5196 9.89464 18.2652 10 18 10Z" />
    </Svg>
  );
};
