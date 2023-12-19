import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

export const Logo = ({ theme = 'light', ...props }) => {
  const secondaryColor = theme === 'dark' ? '#fff' : '#000'

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={512}
      height={512}
      viewBox="0 0 135.47 135.47"
      {...props}
    >
      <G strokeLinejoin="round" strokeWidth={2.897}>
        <Path
          fill="#f5d90a"
          stroke="#f5d90a"
          d="m95.747 158.43-12.927 2.2.27-62.164 43.537-10.258-22.75 55.518 23.652-4.02"
          style={{
            paintOrder: 'normal',
          }}
          transform="matrix(1.09696 0 0 1.09696 -47.428 -95.114)"
        />
        <Path
          fill={secondaryColor}
          stroke={secondaryColor}
          strokeWidth={3.17789312}
          d="M92.466 58.13 43.04 133.926 57.603 78.67z"
        />
      </G>
    </Svg>
  )
}
