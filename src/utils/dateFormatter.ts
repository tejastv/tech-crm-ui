export function formatDateString(
    date: Date,
    formatOrder: string,
    dateSeparator: string,
  ): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
  
    let dateString = '';
  
    for (const char of formatOrder) {
      if (char === 'd') {
        dateString += day + dateSeparator;
      } else if (char === 'm') {
        dateString += month + dateSeparator;
      } else if (char === 'y') {
        dateString += year + dateSeparator;
      }
    }
  
    dateString = dateString.slice(0, -1); // Remove the trailing separator
  
    return `${dateString}`;
  }
  
// Example usage:
//   const inputDate = new Date("2023-10-20");
//   const formattedDate = formatDateString(inputDate, 'd-m-y', '-');
//   console.log(formattedDate); // Output: "20-10-2023"