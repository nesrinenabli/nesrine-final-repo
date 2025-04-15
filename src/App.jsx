import * as React from "react";
const App = () => {
  return (
    <div>
    <h1>My Hacker Stories</h1>
    <Search />
    <hr />
    <List />
    </div>
    );
}
  const Search = ()  => {
    const handleChange=(event) => {
      console.log(event);
      console.log(event.target.value);
    };
    return(
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={handleChange} />
    </div>
    );
  };

const List = () => (
  <ul>
  {list.map((item) => (
  <li key={item.objectID}>
  <span>
  <a href={item.url}>{item.title}</a>
  </span>
  <span>{item.author}</span>
  <span>{item.num_comments}</span>
  <span>{item.points}</span>
  </li>
  ))}
  </ul>
  );

  export default App;