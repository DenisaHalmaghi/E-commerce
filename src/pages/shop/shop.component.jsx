import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import { SHOP_DATA } from "./shop.data.js";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop">
        {this.state.collections.map(({ id, title, items }) => (
          <CollectionPreview
            key={id}
            title={title}
            items={items}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
