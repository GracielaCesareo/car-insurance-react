export function getYearDiff(year) {
    return new Date().getFullYear() - year
}

export function calculateByRegion(region) {
     let increment

     switch(region){
        case '1':
            increment = 1.3;
            break;
        case '2':
            increment = 1.15;
            break;
        case '3':
            increment = 1.05;
            break;
        default:
            break;
     }
     return increment
}

export function calculateByPlan(plan) {
    return (plan === '1') ? 1.20 : 1.50
}

export function formatToCurrency(amount) {
    return amount.toLocaleString("en-US", {
        style: 'currency',
        currency: 'USD'
    })
}
