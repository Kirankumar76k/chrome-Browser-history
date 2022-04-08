import {Component} from 'react'
import BrowserItem from '../BrowseItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class Browser extends Component {
  state = {UsingInitialHistoryList: initialHistoryList, searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteItem = id => {
    this.setState(prevState => ({
      UsingInitialHistoryList: prevState.UsingInitialHistoryList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  itemContainer = () => {
    const {UsingInitialHistoryList, searchInput} = this.state
    const filterData = UsingInitialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <ul className="item-list">
          {filterData.map(eachItem => (
            <BrowserItem
              key={eachItem.id}
              historyListDetails={eachItem}
              onDeleteItem={this.onDeleteItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  NoHistoryFound = () => (
    <div className="no-hist-container">
      <p className="no-hist">There is no history to show</p>
    </div>
  )

  render() {
    const {UsingInitialHistoryList, searchInput} = this.state
    const filterData = UsingInitialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const isDataAvailable =
      filterData.length > 0 ? this.itemContainer() : this.NoHistoryFound()
    return (
      <div className="bg-container">
        <div className="nav-container">
          <img
            className="img-cls"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-container">
            <img
              className="search-img"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search-img"
            />
            <input
              type="search"
              className="input-cls"
              placeholder="Search history"
              value={searchInput}
              onChange={this.onSearchInput}
            />
          </div>
        </div>
        {isDataAvailable}
      </div>
    )
  }
}
export default Browser
