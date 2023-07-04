import React, { PureComponent } from 'react';

export class Total extends PureComponent {
  render() {
    const { total } = this.props;

    return (
      <div>
        <p>Number of exercises {total}</p>
      </div>
    );
  }
}

export default Total;
