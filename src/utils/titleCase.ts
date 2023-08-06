
export function titleCase(
    str: string
): string {
    const newStr = str.toLowerCase().split(' ');
    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    }
    return newStr.join(' ');
}