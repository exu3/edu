import { Avatar as Base } from 'theme-ui'

const Avatar = ({ size = 48, ...props }) => (
  <Base
    {...props}
    size={size}
    src="https://github.com/exu3.png"
    alt="illustration of a cat"
    mr={3}
  />
)

export default Avatar
