import React, { Component } from 'react';
import UIShell from './content/UIShell/UIShell';
import { StockItemService } from "./services/stock-item.service";
import './App.scss';

class App extends Component {
constructor(props) {
    super(props);

    this.stockService = props.stockService || new StockItemService();
}

render() {
    return (
      <div className="app">
          <UIShell stockService={this.stockService} />
      </div>
    );
}
}

export default App;
