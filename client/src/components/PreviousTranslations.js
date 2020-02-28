export default function translationsList(props) {
    const translations = props.numbers;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }