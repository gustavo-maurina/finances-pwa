export interface LoanSimulation {
  contractValue: number;
  numberOfInstallments: number;
  installmentValue: number;
  rate: number;
  nearEstimatedDate: string;
  fatEstimatedDate: string;
}
