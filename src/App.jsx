import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className=' d-flex container-fluid mt-5 flex-column'>
        <div className=' justify-content-center mt-5'>
          <h2 className='d-inline-flex p-2 m-5'>We’re farmers, purveyors, and eaters of organically grown food.</h2>
        </div>
        <div className='justify-content-center d-inline-flex'>
          <button className='btn bton-1 mb-5'>Browse our shop </button>
        </div>

        <img src="" alt="" />
        <div className='d-flex'>
          <p className='mx-5 p1'>WHAT WE BELIEVE</p>
          <div className='mx-5'>

          </div>
          <p >We believe in produce. Tasty produce. Produce like:

            Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.

            What are we forgetting?

            Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...</p>
        </div>

      </main>

    </>
  )
}

export default App
