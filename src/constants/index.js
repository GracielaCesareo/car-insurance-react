export const REGIONS = [
    {id:1, name: 'European'},
    {id:2, name: 'Asian'},
    {id:3, name: 'American'}
]

const YEARMAX = new Date().getFullYear()

export const YEARS = Array.from( 
    new Array(20), (value, index) => YEARMAX - index
)

export const PLANS = [
    {id:1, name: 'Basic'},
    {id:2, name: 'Plus'},
]
