import ContentLoader from "react-content-loader"

const CardProductLoader = () => (
  <ContentLoader 
    speed={1}
    width={250}
    height={250}
    viewBox="0 0 250 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#aaa7a7"
  >
    <rect x="34" y="9" rx="0" ry="0" width="150" height="150" /> 
    <rect x="21" y="173" rx="0" ry="0" width="180" height="22" /> 
    <rect x="21" y="208" rx="0" ry="0" width="181" height="22" />
  </ContentLoader>
)

export default CardProductLoader

