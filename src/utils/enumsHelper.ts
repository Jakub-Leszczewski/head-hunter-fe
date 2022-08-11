import { ContractType, WorkType } from "types";

export const workType = [
    { name: WorkType.Irrelevant, value: 'Bez znaczenia' },
    { name: WorkType.OnSite, value: 'Na miejscu' },
    { name: WorkType.ReadyToMoving, value: 'Gotowość do przeprowadzki' },
    { name: WorkType.Remote, value: 'Wyłącznie zdalnie' },
    { name: WorkType.Hybrid, value: 'Hybrydowo' },
];
export const contractType = [
    { name: ContractType.Irrelevant, value: 'Brak preferencji' },
    { name: ContractType.EmploymentContract, value: 'Tylko UoP' },
    { name: ContractType.PossibleB2BContract, value: 'Możliwe B2B' },
    { name: ContractType.PossibleMandate, value: 'Możliwe UZ/UoD' },
];
export const canTakeApprenticeshipData = [
    { name: '', value: 'NIE' },
    { name: 'tak', value: 'TAK' },
];