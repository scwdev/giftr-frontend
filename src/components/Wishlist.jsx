import { Container, Table } from "react-bootstrap";

const Wishlist = (props) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Recipient</th>
          <th>Item</th>
          <th>Store/Link</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>person name</td>
          <td>item name</td>
          <td>storelink</td>
          <td>price</td>
          <td>status</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default Wishlist;
