import Button from "./components/ui/Button"
import Input from "./components/ui/Input"
import Spinner from "./components/ui/Spinner"

const App = () => {
  return (
    <div className="">
      <h1 className="heading-1">Hello world</h1>
      <h2 className="heading-2">Hello world</h2>
      <h3 className="heading-3">Hello world</h3>
      <Button variant="primary" size="md" >Buy</Button>
      <Button variant="primary" size="lg" >Buy</Button>
      <Button variant="primary" size="sm" >Buy</Button>

      <Button className="px-0" variant="outline" size="md" >b</Button>
      <Button variant="outline" size="lg" >Buy to cart</Button>
      <Button variant="outline" size="sm" >Buy</Button>

      <Input type="Email" placeholder="contact@jhon.com" />
      <Spinner variant="default" />
    </div>
  )
}

export default App