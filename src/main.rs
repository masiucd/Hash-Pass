mod data_structures;
mod problem_solving;
// use data_structures::list::{List, Listable};

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
