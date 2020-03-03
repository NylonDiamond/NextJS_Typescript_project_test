export default interface INode<T> {
  value: T;
  next?: INode<T>; // can be nullable at end of a list
}
