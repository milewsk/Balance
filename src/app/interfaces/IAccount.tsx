export interface IResponseAccounts {
  Message: string;
  Status: number;
  ReturnData: Array<IAccount>;
}

export interface IResponseAccount {
  Message: string;
  Status: number;
  ReturnData: IAccount;
}

export interface IAccount {
  AccountId: number;
  Name: string;
  AccountType: string;
  Code: string;
  ParentCode: string | null;
  InitialState: number | null;
  OverallBalance: number;
  UserId: number;
}
