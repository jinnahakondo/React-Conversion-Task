import { useState } from "react"
import Card from "./Card"
import Popup from "./Popup"

const products = [
  {
    id: 1,
    title: "Mechanical Keyboard",
    description: "RGB Gaming Keyboard",
    image:
      "https://dummyimage.com/600x400/111827/ffffff&text=Mechanical+Keyboard",
    price: 120,
    inStock: 8,
  },

  {
    id: 2,
    title: "Wireless Mouse",
    description: "Ultra Fast Sensor",
    image:
      "https://dummyimage.com/600x400/111827/ffffff&text=Wireless+Mouse",
    price: 80,
    inStock: 5,
  },

  {
    id: 3,
    title: "Gaming Headset",
    description: "Surround Sound Headset",
    image:
      "https://dummyimage.com/600x400/111827/ffffff&text=Gaming+Headset",
    price: 95,
    inStock: 6,
  },

  {
    id: 4,
    title: "4K Monitor",
    description: "Ultra HD Display",
    image:
      "https://dummyimage.com/600x400/111827/ffffff&text=4K+Monitor",
    price: 300,
    inStock: 4,
  },

  {
    id: 5,
    title: "Gaming Chair",
    description: "Ergonomic Comfort Chair",
    image:
      "https://dummyimage.com/600x400/111827/ffffff&text=Gaming+Chair",
    price: 220,
    inStock: 3,
  },

  {
    id: 6,
    title: "USB Microphone",
    description: "Crystal Clear Audio",
    image:
      "https://dummyimage.com/600x400/111827/ffffff&text=USB+Microphone",
    price: 70,
    inStock: 7,
  },
];

function App() {

  const [showPopup, setShowPopup] = useState(false)
  return (
    <div className="bg-slate-950 min-h-screen text-white p-8">
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Card key={product.id} {...product} setShowPopup={setShowPopup} />
        ))}
  
        {showPopup && <Popup />}
      </section>


    </div>
  )
}

export default App
