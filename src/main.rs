mod data_structures;
mod problem_solving;
mod utils;
use utils::num::sum_generic;

fn main() {
    let x = sum_generic(10, 20);
    println!("{}", x);
}
