import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WavyHelpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M9.14644 9.07342C9.31723 8.54713 9.6301 8.07877 10.0507 7.71929C10.4714 7.35982 10.9837 7.12359 11.5302 7.03689C12.0767 6.95018 12.6362 7.01621 13.1474 7.22784C13.6587 7.43947 14.1014 7.78856 14.4267 8.23614C14.752 8.68372 14.9468 9.21237 14.9903 9.76397C15.0338 10.3156 14.9238 10.8686 14.6726 11.3616C14.4215 11.8547 14.0393 12.2683 13.5676 12.5574C13.0958 12.8466 12.5533 12.9996 12 12.9996V13.9996M12.0498 16.9998V17.0998L11.9501 17.0995V16.9998H12.0498ZM13.246 3.45879L14.467 4.49929C14.7746 4.76143 15.1566 4.91991 15.5594 4.95206L17.1585 5.0795C18.0986 5.15452 18.8453 5.9008 18.9204 6.84093L19.0475 8.44024C19.0797 8.8431 19.2387 9.22559 19.5008 9.53319L20.5409 10.7538C21.1526 11.4716 21.1527 12.5275 20.541 13.2454L19.5009 14.4662C19.2388 14.7738 19.08 15.1564 19.0478 15.5593L18.9199 17.1583C18.8449 18.0984 18.0993 18.8452 17.1591 18.9202L15.5595 19.0478C15.1567 19.08 14.7744 19.2381 14.4667 19.5002L13.246 20.5407C12.5282 21.1525 11.4717 21.1526 10.7539 20.5409L9.53316 19.5003C9.22555 19.2382 8.84325 19.0798 8.44038 19.0477L6.84077 18.9202C5.90064 18.8452 5.15505 18.0986 5.08003 17.1585L4.9521 15.5594C4.91995 15.1565 4.76111 14.7742 4.49898 14.4666L3.45894 13.2454C2.84721 12.5276 2.84693 11.472 3.45865 10.7542L4.49963 9.53301C4.76176 9.22541 4.91908 8.84311 4.95122 8.44024L5.07915 6.84112C5.15417 5.90099 5.90192 5.15442 6.84205 5.0794L8.43989 4.95196C8.84276 4.91981 9.22525 4.76146 9.53285 4.49932L10.754 3.45879C11.4718 2.84707 12.5282 2.84707 13.246 3.45879Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
