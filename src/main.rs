mod data_structures;
mod problem_solving;
// use data_structures::list::{List, Listable};

trait Iterator {
  type Item;
  fn next(&mut self) -> Option<Self::Item>;
}

fn main() {
  let xs = vec![1, 2, 3];
  let next = xs.iter().next();

  if let Some(num) = next {
    println!("{}", num);
  }

  for x in xs {
    println!("{}", x);
  }
}

#[test]
fn iterator_demonstration() {
  let xs = vec![1, 2, 3];

  let mut xs_iter = xs.into_iter();

  assert_eq!(xs_iter.next(), Some(1));
  assert_eq!(xs_iter.next(), Some(2));
  assert_eq!(xs_iter.next(), Some(3));
  assert_eq!(xs_iter.next(), None);
}
