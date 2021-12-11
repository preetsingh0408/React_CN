import React from "react";

// Use props to add styles, /
//link and images so that it
//looks like the reference image.

// class ListItem extends React.Component {
//   render() {
//     return (
//       <div className="ListItem">
//         <a href="#">Link</a>
//       </div>
//     );
//   }
// }

const ListItem = (props) => {
  const { data } = props;
  // console.log(data)
  return (
    <div className="ListItem" style={{ backgroundColor: data.bgColor }}>
      <img src={data.icon} alt={data.name} />
      <a href={data.link}>{data.name}</a>
    </div>
  );
  //}
};
export default ListItem;
