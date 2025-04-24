export class ObjectManipulator<T extends Record<string, any>> {
  protected obj: T;

  constructor(obj: T) {
    this.obj = obj;
  }

  public set<K extends keyof T>(key: K, value: T[K]): ObjectManipulator<T> {
    return new ObjectManipulator({ ...this.obj, [key]: value });
  }

  public get<K extends keyof T>(key: K): T[K] | undefined {
    return this.obj[key];
  }

  public delete<K extends keyof T>(key: K): ObjectManipulator<T> {
    const newObj = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject(): T {
    return this.obj;
  }
}
