export default function MenuItem() {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all'>
      <div className="text-center">
        <img className="max-h-auto max-h-24 mx-auto block" src='/pizza.png' alt='pizza' />
      </div>
      <h4 className='my-3 font-semibold text-xl'>Pepperoni Pizza</h4>
      <p className='text-gray-500 text-sm'>
        tedasjifios@jrifoasdfirj@fijsaifjse@fijewv aufhfpuiasehgfup
      </p>
      <button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>Add to cart $12</button>
    </div>
  )
}
