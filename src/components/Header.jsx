import React from "react";

class Header extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       search: "",
//     };

//     this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
//   }

//   onSearchChangeEventHandler(event) {
//     this.setState(() => {
//       return {
//         search: event.target.value,
//       };
//     });
//   }

  render() {
    return (
      <nav className="note-app__header">
        <h1>Notes</h1>
        <input type="text" value={this.props.search} onChange={this.props.onSearch} placeholder="Cari catatan..." />
      </nav>
    );
  }
}

// const Header = () => {
//     return(
//         <nav className="note-app__header">
//             <h1>Notes</h1>
//             <input type="text" value={this.state.search} onChange={this.onSearchChangeEventHandler} placeholder="Cari catatan..." />
//         </nav>
//     );
// }

export default Header;
