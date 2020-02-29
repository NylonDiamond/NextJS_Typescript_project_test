import TranslationsAPI from "../otherStuffNotReact/API";
import react, { useEffect } from "react";

export default (props: any) => {
  try {
    // const data = await TranslationsAPI.getPreviousTranslations();
    let lilTransArray: any = [];
    useEffect(() => {
      // console.log(props.previousTranslations);
      const newArray = props.previousTranslations.map(
        (item: {
          _id: react.ReactText;
          fromText: react.ReactNode;
          toText: react.ReactNode;
        }) => (
          <li key={item._id}>
            <p style={{ display: "inline", color: "#751414" }}>
              {item.fromText}
            </p>{" "}
            >>>{" "}
            <p style={{ display: "inline", color: "#40824e" }}>{item.toText}</p>
          </li>
        )
      );
      // lilTransArray = newArray;
      console.log(newArray);
      return () => {
        <ul>
          {" "}
          <h3>Recent Translations</h3>
          {props.previousTranslations.map(
            (item: {
              _id: react.ReactText;
              fromText: react.ReactNode;
              toText: react.ReactNode;
            }) => (
              <li key={item._id}>
                <p style={{ display: "inline", color: "#751414" }}>
                  {item.fromText}
                </p>{" "}
                >>>{" "}
                <p style={{ display: "inline", color: "#40824e" }}>
                  {item.toText}
                </p>
              </li>
            )
          )}
        </ul>;
      };
    }, [props.previousTranslations]);
    return (
      <ul>
        <h3>Recent Translations</h3>

        {lilTransArray}
      </ul>
    );
  } catch (err) {
    console.log(err);
  }
};
