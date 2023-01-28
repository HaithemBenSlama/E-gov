import DiplomeData from '../components/diplomeData'
import Layout from '../components/Layout'

const Diplome = () => {

  return (
    <Layout>
      <div className='bg-text rounded-lg'>
        <div className='h-16 px-8 flex items-center text-center'>
          <p className='text-white font-bold flex-auto '>Gérer les Diplomes</p>
        </div>
      </div>
      <div className="container mx-auto my-8 max-h-full overflow-y-scroll" >
        <div className="flex shadow border-gray-500">
          <DiplomeData></DiplomeData>
        </div>
      </div>
    </Layout>
  )
}

export default Diplome