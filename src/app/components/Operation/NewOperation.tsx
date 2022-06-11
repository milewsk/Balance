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
import ActiveOperation from "./ActiveOperations";

import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { json } from "stream/consumers";
import { Collection } from "typescript";
import { AnyArray } from "immer/dist/internal";

interface IOperation {
  Identifier: string;
  Name: string;
  Type: string;
  Parent: string | null;
}

const NewOperation = (): JSX.Element => {
  const [firstSelect, setFirstSelect] = useState("Wybierz operację");
  const [secondSelect, setSecoundSelect] = useState("Wybierz operację");

  const List: Array<IOperation> = ActiveOperation;

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

    const Operation1 = List.find((item: IOperation) => {
      return item.Identifier === target.operation1.Identifier;
    });
    const Operation2 = List.find((item: IOperation) => {
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
          {List.map((item: IOperation) => {
            return <option value={item.Identifier}>{item.Name}</option>;
          })}
        </select>
        <select
          name="operation2"
          value={secondSelect}
          onChange={SecondSelectHandler}
        >
          {List.map((item: IOperation) => {
            return <option value={item.Identifier}>{item.Name}</option>;
          })}
        </select>
      </form>
    </Fragment>
  );
};

export default NewOperation;
