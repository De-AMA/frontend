import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavMenu extends Component {
  state = { activeItem:"App" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'App'}
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name='NFT List'
          active={activeItem === 'nft'}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='ens'
          active={activeItem === 'ens'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
        <Menu.Item
          name='NFT MINT'
          active={activeItem === 'nftmint'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
    )
  }
}