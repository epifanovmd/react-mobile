import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlashRedEyeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 5C15.44 5 15 5.44 15 6C15 6.56 15.44 7 16 7C16.56 7 17 6.56 17 6C17 5.44 16.56 5 16 5ZM16 2C13.27 2 10.94 3.66 10 6C10.94 8.34 13.27 10 16 10C18.73 10 21.06 8.34 22 6C21.06 3.66 18.73 2 16 2ZM16 3.5C16.663 3.5 17.2989 3.76339 17.7678 4.23223C18.2366 4.70107 18.5 5.33696 18.5 6C18.5 6.66304 18.2366 7.29893 17.7678 7.76777C17.2989 8.23661 16.663 8.5 16 8.5C15.337 8.5 14.7011 8.23661 14.2322 7.76777C13.7634 7.29893 13.5 6.66304 13.5 6C13.5 5.33696 13.7634 4.70107 14.2322 4.23223C14.7011 3.76339 15.337 3.5 16 3.5ZM3 2V14H6V23L13 11H9L10.12 8.5C9.44 7.76 8.88 6.93 8.5 6C9.19 4.29 10.5 2.88 12.11 2H3Z" />
    </Svg>
  );
};
