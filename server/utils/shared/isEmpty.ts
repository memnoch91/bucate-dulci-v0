/**
 * functio checks to see if the value given has values in it
 * @param value any type of value given to the functions
 *
 */
export default function isEmpty (value:any):boolean {
    return(value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0))
}