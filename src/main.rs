mod config;
mod math;
mod problem_solving;
mod util_fns;

fn main() {
    config::simple_config();
    let sum = math::addition::add(10, 20);
    let sum = math::addition::increase_by_one(sum);
    let reversed = problem_solving::reverse::reverse_string("hello".to_string());
    let x = problem_solving::dummy::print_name_if_even_age(20, "John");
    println!("{:?}", sum);
    println!("{:?}", reversed);
    println!("{:?}", x);
}
