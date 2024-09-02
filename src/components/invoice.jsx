

const Invoice = ({invoice}) => {
  return (
    <div className="border p-3 my-2">
        <h4>Invoice {invoice.id}</h4>
        <p>{invoice.details}</p>
    </div>
  )
}

export default Invoice