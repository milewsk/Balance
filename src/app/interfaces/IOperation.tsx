export interface IResponseOperations {
  Message: string;
  Status: number;
  ReturnData: Array<IOperation>;
}

export interface IResponseOperation {
  Message: string;
  Status: number;
  ReturnData: IOperation;
}

export interface IOperation {
  OperationId: number;
  Value: number;
  DateOfOperation: Date;
  AccountId: number;
  DestinationAccountId: number;
  InitialState: number | null;
}
