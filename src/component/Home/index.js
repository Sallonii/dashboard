import {Component} from 'react'

import {IoHome, IoMailOpen} from 'react-icons/io5'
import {FaLaptopCode, FaLinkedin} from 'react-icons/fa'

import HomeTab from '../HomeTab'
import ProjectsTab from '../ProjectsTab'
import MailTab from '../MailTab'
import LinkedinTab from '../LinkedinTab'

import './index.css'

class Home extends Component {
  state = {activeTab: 'Home'}

  homeClicked = () => {
    this.setState({activeTab: 'Home'})
  }

  projectClicked = () => {
    this.setState({activeTab: 'Project'})
  }

  mailClicked = () => {
    this.setState({activeTab: 'Mail'})
  }

  mediaClicked = () => {
    this.setState({activeTab: 'Linkedin'})
  }

  renderHeader = () => (
    <div className="tab-ul-container">
      <div className="tab-li-container">
        <IoHome className="react-icon" onClick={this.homeClicked} />
      </div>
      <div className="tab-li-container">
        <FaLaptopCode className="react-icon" onClick={this.projectClicked} />
      </div>
      <div className="tab-li-container">
        <IoMailOpen className="react-icon" onClick={this.mailClicked} />
      </div>
      <div className="tab-li-container">
        <FaLinkedin className="react-icon" onClick={this.mediaClicked} />
      </div>
    </div>
  )

  renderHomeTab = () => <HomeTab />

  renderProjectTab = () => <ProjectsTab />

  renderMailTab = () => <MailTab />

  renderLinkedinTab = () => <LinkedinTab />

  getTabDetails = () => {
    const {activeTab} = this.state
    switch (activeTab) {
      case 'Home':
        return this.renderHomeTab()
      case 'Project':
        return this.renderProjectTab()
      case 'Mail':
        return this.renderMailTab()
      case 'Linkedin':
        return this.renderLinkedinTab()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        {this.renderHeader()}
        {this.getTabDetails()}
      </div>
    )
  }
}

export default Home
