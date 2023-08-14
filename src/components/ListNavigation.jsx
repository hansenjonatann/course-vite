function ListNavigation({ items }) {
  const renderedItems = items.map((item) => (
    <li className="inline-block mr-[10px]" key={item.label}>
      {item.label}
    </li>
  ));
  return (
    <ul className="list-none m-0 p-0 justify-items-end">{renderedItems}</ul>
  );
}

export default ListNavigation;
