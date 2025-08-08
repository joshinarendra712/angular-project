import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string, keys: string[] = []): any[] {
//     if (!items || !searchText) return items;
//     searchText = searchText.toLowerCase();
//     return items.filter(item =>
//       keys.some(key => (item[key] || '').toLowerCase().includes(searchText))
//     );
//   }

transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) return items;
    return items.filter(item =>
      JSON.stringify(item).toLowerCase().includes(searchText.toLowerCase())
    );
  }

}
