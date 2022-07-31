mod data_structures;
<<<<<<< HEAD
mod problem_solving;
mod utils;
use utils::num::sum_generic;

fn main() {
    let x = sum_generic(10, 20);
    println!("{}", x);
=======
mod exercism;
mod helpers;
mod iterators;
use exercism::enums::log::{log, LogLevel};
use iterators::my_iter::Counter;

fn main() {
    let res = log(LogLevel::Info, "Hello, world!");
    println!("{:?}", res);
>>>>>>> c87a4b37ad7643d1c4ddf2af666a7e9def8caf5f
}
