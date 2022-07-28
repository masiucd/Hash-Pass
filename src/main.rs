mod data_structures;
mod exercism;
mod helpers;
mod iterators;
use exercism::enums::log::{log, LogLevel};
use iterators::my_iter::Counter;

fn main() {
    let res = log(LogLevel::Info, "Hello, world!");
    println!("{:?}", res);
}
