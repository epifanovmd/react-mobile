import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const GogIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3ZM10.46 5.54C9.95 5.54 9.54 5.95 9.54 6.46V9.54C9.54 9.66082 9.5638 9.78045 9.61003 9.89207C9.65627 10.0037 9.72403 10.1051 9.80946 10.1905C9.89489 10.276 9.99631 10.3437 10.1079 10.39C10.2196 10.4362 10.3392 10.46 10.46 10.46H13.54C13.6608 10.46 13.7804 10.4362 13.8921 10.39C14.0037 10.3437 14.1051 10.276 14.1905 10.1905C14.276 10.1051 14.3437 10.0037 14.39 9.89207C14.4362 9.78045 14.46 9.66082 14.46 9.54V6.46C14.46 5.95 14.05 5.54 13.54 5.54H10.46ZM11.08 6.77H12.92C13.0022 6.77 13.0811 6.80266 13.1392 6.8608C13.1973 6.91893 13.23 6.99778 13.23 7.08V8.92C13.23 9.00222 13.1973 9.08107 13.1392 9.1392C13.0811 9.19734 13.0022 9.23 12.92 9.23H11.08C10.9978 9.23 10.9189 9.19734 10.8608 9.1392C10.8027 9.08107 10.77 9.00222 10.77 8.92V7.08C10.77 6.99778 10.8027 6.91893 10.8608 6.8608C10.9189 6.80266 10.9978 6.77 11.08 6.77ZM4.92 5.54C4.676 5.54 4.442 5.63693 4.26946 5.80946C4.09693 5.982 4 6.216 4 6.46V9.54C4 10.05 4.41 10.46 4.92 10.46H7.08V9.23H5.54C5.37 9.23 5.23 9.09 5.23 8.92V7.08C5.23 6.91 5.37 6.77 5.54 6.77H7.38C7.46222 6.77 7.54107 6.80266 7.5992 6.8608C7.65734 6.91893 7.69 6.99778 7.69 7.08V10.77C7.69 10.8522 7.65734 10.9311 7.5992 10.9892C7.54107 11.0473 7.46222 11.08 7.38 11.08H4V12.31H8C8.5 12.31 8.92 11.89 8.92 11.38V6.46C8.92 6.216 8.82307 5.982 8.65054 5.80946C8.478 5.63693 8.244 5.54 8 5.54H4.92ZM16 5.54C15.5 5.54 15.08 5.95 15.08 6.46V9.54C15.08 10.05 15.5 10.46 16 10.46H18.15V9.23H16.62C16.45 9.23 16.31 9.09 16.31 8.92V7.08C16.31 6.91 16.45 6.77 16.62 6.77H18.46C18.63 6.77 18.77 6.91 18.77 7.08V10.77C18.77 10.94 18.63 11.08 18.46 11.08H15.08V12.31H19.08C19.59 12.31 20 11.89 20 11.38V6.46C20 5.95 19.59 5.54 19.08 5.54H16ZM9.85 13.54C9.34 13.54 8.92 13.95 8.92 14.46V17.54C8.92 18.05 9.34 18.46 9.85 18.46H12.92C13.43 18.46 13.85 18.05 13.85 17.54V14.46C13.85 13.95 13.43 13.54 12.92 13.54H9.85ZM10.46 14.77H12.31C12.5 14.77 12.62 14.91 12.62 15.08V16.92C12.62 17.0022 12.5873 17.0811 12.5292 17.1392C12.4711 17.1973 12.3922 17.23 12.31 17.23H10.46C10.29 17.23 10.15 17.09 10.15 16.92V15.08C10.15 14.9978 10.1827 14.9189 10.2408 14.8608C10.2989 14.8027 10.3778 14.77 10.46 14.77ZM4.92 13.54C4.41 13.54 4 13.95 4 14.46V17.54C4 18.05 4.41 18.46 4.92 18.46H8.31V17.23H5.54C5.37 17.23 5.23 17.09 5.23 16.92V15.08C5.23 14.91 5.37 14.77 5.54 14.77H8.31V13.54H4.92ZM15.38 13.54C14.87 13.54 14.46 13.95 14.46 14.46V18.46H15.69V15.08C15.69 14.9978 15.7227 14.9189 15.7808 14.8608C15.8389 14.8027 15.9178 14.77 16 14.77H16.62V18.46H17.85V14.77H18.77V18.46H20V13.54H15.38Z" />
    </Svg>
  );
};
