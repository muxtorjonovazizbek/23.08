  import Army from './components/army'
  import Animals from './components/animals'
  import Invoice from './components/invoice'
  import { useState } from 'react'
  import 'bootstrap/dist/css/bootstrap.min.css'

  const App = () => {
    const [invite, setInvite] = useState([
      {id: 1, firstName: "John", lastName: "Smith", age: 45, city: "Chicago", salary: 1000},
      {id: 2, firstName: "Jane", lastName: "Doe", age: 15, city: "Phoenix", salary: 5000},
      {id: 3, firstName: "Mary", lastName: "Smith", age: 40, city: "Chicago", salary: 2500},
      {id: 4, firstName: "George", lastName: "Edwards", age: 17, city: "Phoenix", salary: 3000},
    ])

    const [animals, setAnimals] = useState([
      {id: 1, type: "Lion", name: "Panthero leo", weight: "140 kg", food: "meat"},
      {id: 2, type: "Gorilla", name: "Gorilla beringei", weight: "220 kg", food: "plants, instects"},
      {id: 3, type: "Zebra", name: "Equus quagga", weight: "320 kg", food: "plants"}
    ])

    const [invoice,setInvoice] = useState([
      {id: 1, details: "Delivery (custom detils)"},
      {id: 1, details: "Delivery (custom detils)"},
      {id: 1, details: "Delivery (custom detils)"},
      {id: 1, details: "Delivery (custom detils)"},
    ])

    const [selectedInvoice, setSelectedInvoice] = useState(null)

    const handleButtonClick = (id) => {
      const invoice = invoice.find(inv => inv.id === id)
      setSelectedInvoice(invoice)
    }

    return (
      <div className='container'>
        <div className='row'>
        <Army invite={invite} setInvite={setInvite}/>
        
        <div className='row'>
          {
            animals.map((item,index) => {
              return <div key={index} className='col-md-4'>
                <Animals item={item}/>
              </div>
            })
          }

        </div>

        <div className="row mt-5">
          {invoice.map((item) => (
            <div key={item.id} className='col-md-3'>
              <button className='btn btn-primary' onClick={() => handleButtonClick(item.id)}>
                Show Invoice {item.id}
              </button>
            </div>
          ))}
        </div>
        </div>
      </div>
    )
  }

  export default App