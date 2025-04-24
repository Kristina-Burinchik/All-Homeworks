export interface Admin {
  name: string;
  age: number;
  role: "Administrator" | string;
  occupation?: string;
  children?: number;
}
