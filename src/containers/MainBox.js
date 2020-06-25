import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

const mapIdToComps = {
  'photo': Photos,
  'cocktail': Cocktails,
  'pokemon': Pokemon,
  'profile': Profile
}


class MainBox extends React.Component {

  state = {
    activeComp: Profile
  }

  renderBody = (id) => {
    this.setState({activeComp: mapIdToComps[id]})
  }

  render() {

    const detailsToDisplay = <div>{<this.state.activeComp />}</div>

    return (
      <div>
        <MenuBar renderBody={this.renderBody}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
