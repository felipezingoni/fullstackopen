import React, { PureComponent } from 'react'

export class Header extends PureComponent {
  render() {
    const {course} = this.props;
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }
}

export default Header
