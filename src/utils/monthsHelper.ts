export const monthsHelper = (monthsOfCommercialExp: number): string => {
    if (monthsOfCommercialExp === 1) return '1 miesiąc';
    if (monthsOfCommercialExp > 1 && monthsOfCommercialExp < 5) return `${monthsOfCommercialExp} miesiące`;
    if (monthsOfCommercialExp > 4 || monthsOfCommercialExp === 0) return `${monthsOfCommercialExp} miesięcy`;
    return '';
};