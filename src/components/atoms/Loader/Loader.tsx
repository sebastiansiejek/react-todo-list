import ReactLoader from 'react-loader-spinner'

const Loader: React.FC = () => (
  <ReactLoader
    type="Oval"
    style={{ alignSelf: 'center' }}
    color="#2EC4B6"
    width="20"
    height="20"
  />
)

export default Loader
