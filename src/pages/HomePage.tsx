import ExampleArticle from '../articles/ExampleArticle'
// import MainHeader from '../components/shared/MainHeader/MainHeader'
import NavBar from '../components/shared/NavBar/NavBar'
import '../components/shared/NavBar/NavBar.css'

const HomePage = () => {
  return (
    <>
      <div className='bg-yellow-400'>
        {/* <MainHeader /> */}
        <NavBar />
        <ExampleArticle />
      </div>
    </>
  )
}

export default HomePage
