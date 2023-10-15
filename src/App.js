import UserProfile from './components/UserProfile'
import './App.css'

const userDetails = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Aman Kumar',
    designation: 'Software Developer',
  },

  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Salu Kori',
    designation: 'Software Developer',
  },

  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Ansh Kumar',
    designation: 'Software Developer',
  },

  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Anshika Kumari',
    designation: 'Software Developer',
  },
]

const App = () => {
  return (
    <div clasName="list-container">
      <h1 clasName="title">User List</h1>
      <ul>
        {userDetails.map(user => 
          <UserProfile userDetails={user} key={user.uniqueNo}/>
        )}
      </ul>
    </div>
  )
}

export default App
