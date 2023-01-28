import Layout from "../components/Layout";
import UserData from "../components/userData";

export default function Home() {
  return (
    <Layout>
      <div className='bg-text rounded-lg'>
        <div className='h-16 px-8 flex items-center text-center'>
          <p className='text-white font-bold flex-auto '>Gérer les Utilisateurs</p>
        </div>
      </div>
      <div className="container mx-auto mb-8 max-h-full overflow-y-scroll" >
        <div className="flex shadow border-gray-500">
          <UserData></UserData>
        </div>
      </div>
    </Layout>);
}
