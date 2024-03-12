// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import HomePage from './Pages/HomePage'
// import AboutPage from './Pages/AboutPage'
// import Projects from './Pages/Projects'
// import Testmonials from './Pages/Testmonials'
// import Contact from './Pages/Contact'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<HomePage/>}/>
//       <Route path='/about' element={<AboutPage/>}/>
//       <Route path='/project' element={<Projects/>}/>
//       <Route path='/testimonial' element={<Testmonials/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
import React from 'react'
import Props from './components/Props'
import Next from './components/Next'
import Card from './components/Card'
const App = () => {
  const image = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/6512971/1.jpg?1435'
  const image1 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/6551371/1.jpg?3742'
  const image2 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/042576/1.jpg?2247'
  const image3 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/8719362/1.jpg?7722'
  const image4 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/0412362/4.jpg?1105'
  return (
    <>
      <Props name="victor" job="web developer" worths="billionaire"/>
      <Props name ="tboy" job="software dev" worths="millionaire"/>
      <Props  name ="femi" job="software engr" worths="trillionaire"/>
      <Props  name ="david" job="data analsyt" worths="zillionaire"/>
      <Props  name ="idris" job="full stack dev" worths="dillionaire"/>


      <Next names="victor" wage="$500000"/>
      <Next names="femi" wage="$40000" />
      <Next names="idris" wage='$50000' />
      <Next names="nike" wage='$60000' />
      <Next names="liod" wage='$903938' />

     <div className='d-flex flex-wrap gap-5'>
      <Card img={image} name='black shoes' descrpi='It is simply brighter than your future.' price={120}/>
      <Card img={image1} name='Nike' descrpi='Can you ever' price={192}/>
      <Card img={image2} name='Boots' descrpi='Your school fees' price={4000}/>
      <Card img={image3} name='Belt' descrpi='Ten of you cant afford' price={700}/>
      <Card img={image4} name='Tv' descrpi='Forget about it' price={120000}/>
     </div>
      
    </>
  )
}

export default App