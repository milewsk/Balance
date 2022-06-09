const ActiveOperation = [
  {
    Identifier: "A",
    Type: "Aktywna",
    Name: "Aktywa trwałe",
    Parent: null,
  },
  {
    Identifier: "A1",
    Type: "Aktywna",
    Name: "Wartości niemierzalne i trwałe",
    Parent: "A",
  },
  {
    Identifier: "A2",
    Type: "Aktywna",
    Name: "Rzeczowe aktywa trwałe w tym",
    Parent: "A",
  },
  {
    Identifier: "A21",
    Type: "Aktywna",
    Name: "Środki trwałe",
    Parent: "A2",
  },
  {
    Identifier: "A22",
    Type: "Aktywna",
    Name: "Środki trwałe w budowie",
    Parent: "A2",
  },
  {
    Identifier: "A3",
    Type: "Aktywna",
    Name: "Należności długoterminowe",
    Parent: "A",
  },
  {
    Identifier: "A4",
    Type: "Aktywna",
    Name: "Inwestycje długoterminowe w tym",
    Parent: "A",
  },
  {
    Identifier: "A41",
    Type: "Aktywna",
    Name: "Nieruchomości",
    Parent: "A4",
  },
  {
    Identifier: "A42",
    Type: "Aktywna",
    Name: "Długoterminowe aktywa finansowe",
    Parent: "A4",
  },
  {
    Identifier: "A5",
    Type: "Aktywna",
    Name: "Długoterminowe rozliczenia międzyokresowy",
    Parent: "A",
  },
];

export default ActiveOperation;
