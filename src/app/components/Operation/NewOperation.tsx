import React, {
  ChangeEvent,
  ChangeEventHandler,
  Fragment,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import "../../../sass/components/account/login.scss";
import "../../../sass/components/button/button.scss";
import OperationList from "./OperationsList.json";

import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { json } from "stream/consumers";

const SendRequest = async (email: string, passowrd: string) => {
  try {
    const response = await fetch(
      `https://localhost:44360/api/user/${email}/${passowrd}`,
      { method: "GET" }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

interface IOperation {
  Identifier: string;
  Name: string;
  Type: number;
}

const NewOperation = (): JSX.Element => {
  const [firstSelect, setFirstSelect] = useState("Wybierz operację");
  const [secondSelect, setSecoundSelect] = useState("Wybierz operację");

  const List = OperationList;

  const FirstSelectHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setFirstSelect(event.target.value);
  };

  const SecondSelectHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setSecoundSelect(event.target.value);
  };

  const SubmitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      operation1: { Identifier: string };
      operation2: { Identifier: string };
    };

    const Operation1 = List.find((item) => {
      return item.Identifier === target.operation1.Identifier;
    });
    const Operation2 = List.find((item) => {
      return item.Identifier === target.operation2.Identifier;
    });

    try {
      if (Operation1?.Type !== Operation2?.Type) {
      } else {
      }
    } catch (error) {}
  };
  useEffect(() => {}, []);

  return (
    <Fragment>
      Wybierz 2 z pośród wszystkich opeacji - sprawdź warunki podstawowe
      zgodność kwot, zgodność znaków zależnych od wybranych kont
      <form onSubmit={SubmitHandler}>
        <select
          name="operation1"
          value={firstSelect}
          onChange={FirstSelectHandler}
        >
          {List.map((item) => {
            return <option value={item.Identifier}>{item.Name}</option>;
          })}
        </select>
        <select
          name="operation2"
          value={secondSelect}
          onChange={SecondSelectHandler}
        >
          {List.map((item) => {
            return <option value={item.Identifier}>{item.Name}</option>;
          })}
        </select>
      </form>
    </Fragment>
  );
};

export default NewOperation;
