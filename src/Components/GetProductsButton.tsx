import { memo } from "react"
type Props = {
  onFetch : ()=>void
}

const GetProductsButton = memo(({onFetch}: Props) => { // we wrap the component in a memo to avoid rerendering because its the same values
    console.log("Rendered Button Component")
  return (
    <button onClick={onFetch}>Fetch Products</button>
  )
})

export default GetProductsButton