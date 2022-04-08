import './index.css'

const BrowserItem = props => {
  const {historyListDetails, onDeleteItem} = props
  const {id, logoUrl, title, timeAccessed, domainUrl} = historyListDetails

  const onDeleteBtn = () => {
    onDeleteItem(id)
  }

  return (
    <li key={id}>
      <div className="item">
        <div className="name-container">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="item-logo" />
          <p className="title-name">{title}</p>
          <p className="domain-name">{domainUrl}</p>
        </div>

        <button
          className="button"
          onClick={onDeleteBtn}
          testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserItem
