export class Inventory<T> {
    private items: T[] = [];

    public addItem(item: T): void {
        this.items.push(item);
    }

    public getItems(): T[] {
        return this.items;
    }

    public findBy(key: keyof T, value: any): T | undefined {
        return this.items.find((item) => item[key] === value);
    }

    public remove(key: keyof T, value: any): void {
        this.items = this.items.filter((item) => item[key] !== value);
    }
}
