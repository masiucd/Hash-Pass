mod config;
mod math;
mod problem_solving;

fn main() {
    config::simple_config();
    let sum = math::addition::add(10, 20);
    let sum = math::addition::increase_by_one(sum);
    let reversed = problem_solving::reverse::reverse_string("hello".to_string());
    println!("{:?}", sum);
    println!("{:?}", reversed);
}
